import { Button, Card, InlineGrid, Layout, Page, Text } from "@shopify/polaris";
import { useState } from "react";
import { useNavigate } from "@remix-run/react";
// @ts-ignore
import { useQuery } from "@apollo/client";
import { GET_TEMPLATES } from "~/graphql/query";
import SpinnerLayout from "~/components/layout/Spinner";
export default function SampleTemplates() {
    const navigate = useNavigate();

    const { data: recommend, loading: recommendLoading } = useQuery(GET_TEMPLATES, {
        variables: {
            input: {
                name: "",
                status: true,
                type: "Recommend",
                store_id: "NULL",
                limit: 50,
                page: 1,
                sort_column: 'id',
                sort_value: 'asc',
            }
        }
    });

    const [showLess, setShowLess] = useState(false);
    const [visibleData, setVisibleData] = useState(5);
    const [, setShowMore] = useState(false);

    const handleShowMore = () => {
        const nextVisibleData = visibleData + 5;
        if (nextVisibleData >= recommend?.getTemplates.templates.length) {
            setShowMore(false);
            setShowLess(true); // Khi hiển thị tất cả dữ liệu, hiển thị nút "Hiển thị ít hơn"
        }
        setVisibleData(nextVisibleData);
    }
    const handleShowLess = () => {
        setVisibleData(5); // Đặt lại số lượng hiển thị về 6 khi ấn nút "Hiển thị ít hơn"
        setShowLess(false); // Ẩn nút "Hiển thị ít hơn" và hiển thị nút "Tải thêm" lại
        setShowMore(true);
    }

    if (recommendLoading) {

        return (
            <Page fullWidth>
                <SpinnerLayout />
            </Page>
        )
    } else {

        return (
            <Page
                fullWidth
                backAction={{ content: 'Products', url: '../templates' }}
                title="Sample templates"
            >
                <Layout>
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
                        <>
                            <InlineGrid gap="400" columns={5}>
                                {recommend?.getTemplates.templates.slice(0, visibleData).map((item: any, index: number) => (
                                    <Card padding="0" key={index++}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <img alt={item.name} src={item.image} width="auto" height="300px" />
                                            <Text as="h2" variant="headingLg" alignment="center" >{item.name}</Text>
                                            <div style={{ width: '100px', marginBottom: '15px', marginTop: '10px' }}>
                                                <Button variant="primary" tone="success" fullWidth onClick={() => { navigate(`../new_template/${item.id}`); }}>
                                                    Duplicate
                                                </Button>
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
                        {recommend?.getTemplates.templates.length > visibleData && !showLess && (
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
                </Layout>
            </Page>
        )
    }
}