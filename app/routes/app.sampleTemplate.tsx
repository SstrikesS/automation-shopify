import { Button, Card, InlineGrid, Layout, Page, Text } from "@shopify/polaris";
import { useState } from "react";
import { useNavigate } from "@remix-run/react";
// @ts-ignore
import { useQuery } from "@apollo/client";
import { GET_SAMPLEST } from "~/graphql/query";
import SpinnerLayout from "~/components/layout/Spinner";
export default function SampleTemplates() {
    const navigate = useNavigate();

    const { data: recommend, loading: recommendLoading } = useQuery(GET_SAMPLEST, {
        variables: {
            input: {
                status: true,
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
        if (nextVisibleData >= recommend?.getSamplesT.length) {
            setShowMore(false);
            setShowLess(true);
        }
        setVisibleData(nextVisibleData);
    }
    const handleShowLess = () => {
        setVisibleData(5);
        setShowLess(false);
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
                                {recommend?.getSamplesT.slice(0, visibleData).map((item: any, index: number) => (
                                    <Card padding="0" key={index++}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <img alt={item.name} src={item.image} width="auto" height="300px" />
                                            <Text as="h2" variant="headingLg" alignment="center">{
                                                item.name.length > 25
                                                    ? `${item.name.substring(0, 25)}...`
                                                    : item.name}</Text>
                                            <div style={{ width: '100px', marginBottom: '15px', marginTop: '10px' }}>
                                                <Button variant="primary" tone="success" fullWidth onClick={() => { navigate(`../new_template/${item.id}`); }}>
                                                    Get
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
                        marginTop: '10px'
                    }}>
                        {recommend?.getSamplesT.length > visibleData && !showLess && (
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