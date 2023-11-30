import { Button, Card, InlineGrid, } from "@shopify/polaris";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { templateModel } from "~/models/templates.model";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || '1';
    const limit = 6;

    const count = await templateModel.find({
        type: "Custom",
        status: true,
    }).countDocuments();

    const recommend = await templateModel.find({
        type: "Recommend",
        status: true,
    }).limit(limit - 1);

    return json({
        data: {
            recommend,
        },
        currentPage: parseInt(page),
        totalPage: Math.ceil(count / limit),
        total: count,
    });
}
export default function SampleTemplates() {
    const { data, currentPage, totalPage, total } = useLoaderData<typeof loader>();
    console.log({ data, currentPage, totalPage, total });
    const [showLess, setShowLess] = useState(false);
    const [visibleData, setVisibleData] = useState(4);
    const [, setShowMore] = useState(false);

    const handleShowMore = () => {
        const nextVisibleData = visibleData + 4;
        if (nextVisibleData >= data.recommend.length) {
            setShowMore(false);
            setShowLess(true); // Khi hiển thị tất cả dữ liệu, hiển thị nút "Hiển thị ít hơn"
        }
        setVisibleData(nextVisibleData);
    }
    const handleShowLess = () => {
        setVisibleData(4); // Đặt lại số lượng hiển thị về 6 khi ấn nút "Hiển thị ít hơn"
        setShowLess(false); // Ẩn nút "Hiển thị ít hơn" và hiển thị nút "Tải thêm" lại
        setShowMore(true);
    }

    return (
        <>
            <div
                style={{
                    marginTop: '10px',
                    paddingLeft: '5vw',
                    paddingRight: '5vw',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: '23px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        marginBottom: '10px'// Fill the available width
                    }}
                >
                    <b>Samples</b>
                </div>
                <>
                    <InlineGrid gap="1000" columns={4}>
                        {data.recommend.slice(0, visibleData).map((item: any, index) => (
                            <Card padding="0" key={index++}>
                                <div

                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        backgroundColor: '#FAFFD9'
                                    }}
                                >
                                    <img src={item.image}
                                        alt="test"
                                        style={{
                                            width: '250px', height: '250px', marginTop: '15px',
                                        }}
                                    />
                                    <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                        {item.name}
                                    </div>
                                    <div style={{ width: '100px', marginBottom: '15px' }}>
                                        <Button fullWidth onClick={() => { }}>Edit</Button>
                                    </div>
                                </div>
                            </Card>
                        ))}

                    </InlineGrid>
                </>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '10px'// Fill the available width
            }}>
                {data.recommend.length > visibleData && !showLess && (
                    <div style={{ width: '100px' }}>
                        <Button
                            variant="primary" tone="success"
                            fullWidth
                            onClick={handleShowMore}
                        >
                            Show More
                        </Button>
                    </div>

                )}
                {showLess && (
                    <div style={{ width: '100px', }}>
                        <Button
                            variant="primary" tone="critical"
                            fullWidth
                            onClick={handleShowLess}
                        >
                            Show less
                        </Button>
                    </div>

                )}
            </div>
        </>
    )
}

