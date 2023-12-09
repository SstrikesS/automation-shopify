
import { useCallback, useRef, useState } from "react";
import type { EditorRef, EmailEditorProps } from "react-email-editor";
import EmailEditor from "react-email-editor";
import { ProductInfo, ProductGrid, ButtonCustom, DegistBlock, LogoBlock, ImageGallery } from "../blocks/block";
import { Text, Grid, Button, InlineGrid, Layout, Modal, Card, Toast, Form, FormLayout, TextField } from "@shopify/polaris";
import { EditMajor } from '@shopify/polaris-icons';
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
// @ts-ignore
import { useMutation } from "@apollo/client";
import { UPDATE_TEMPLATE } from "~/graphql/mutation";

export default function EmailTemplateEditor(props: { template: any }) {

    const emailEditorRef = useRef<EditorRef | null>(null);

    const [htmlCode, setHTML] = useState("");

    const [activeHTML, setActiveHTML] = useState(false);

    const [editModal, setEditModal] = useState(false);

    const [design, setDesign] = useState(props.template.data ?? undefined);

    const [name, setName] = useState(props.template.name ?? "undefined");

    const [isSaving, setIsSaving] = useState(false);

    const [activeToastClipboard, setActiveToastClipboard] = useState(false);
    const toggleActiveToastClipboard = useCallback(() => setActiveToastClipboard((activeToastClipboard) => !activeToastClipboard), []);
    const toastMarkupClipboard = activeToastClipboard ? (
        <Toast content="Copied to clipboard" onDismiss={toggleActiveToastClipboard} />
    ) : null;

    const [activeToastSavingTimeout, setActiveToastSavingTimeout] = useState(false);
    const toggleActiveToastSavingTimeout = useCallback(() => setActiveToastSavingTimeout((activeToastSavingTimeout) => !activeToastSavingTimeout), []);
    const toastMarkupSavingTimeout = activeToastSavingTimeout ? (
        <Toast content="Saved!" onDismiss={toggleActiveToastSavingTimeout} />
    ) : null;


    const [updateTemplate] = useMutation(UPDATE_TEMPLATE);

    const saveDesign = async () => {
        const unlayer = emailEditorRef.current?.editor;
        unlayer?.saveDesign(async (data: any) => {
            setDesign(data);

            console.log({
                id: props.template.id,
                name: name,
                data: data,
                status: props.template.status,
                image: props.template.image,
            });

            await updateTemplate({
                variables: {
                    input: {
                        id: props.template.id,
                        name: name,
                        data: data,
                        status: props.template.status,
                        image: props.template.image,
                    }
                }
            });

            console.log('Oke');
            toggleActiveToastSavingTimeout();

            setIsSaving(false);

        });
    }

    async function copyTextToClipboard() {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(htmlCode);
        }
    }

    const CopyHTML = () => {
        copyTextToClipboard().then(() => {
            toggleActiveToastClipboard();
        }).catch((err) => {
            console.log(err);
        });
    }

    const onReady: EmailEditorProps['onReady'] = (unlayer) => {
        console.log('onReady', unlayer);
    }

    const onDesignLoad = (data: any) => {
        console.log('onDesignLoad', data);
    }

    const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
        console.log('onLoad', unlayer);
        unlayer.addEventListener('design:loaded', onDesignLoad);
        if (props.template.data) {
            unlayer.loadDesign(props.template.data);
        } else {
            unlayer.loadBlank();
        }
    }

    const handleNameChange = useCallback((value: string) => setName(value), []);

    const toggleActiveHTML = useCallback(() => {
        setActiveHTML((activeHTML) => !activeHTML);
        const unlayer = emailEditorRef.current?.editor;
        unlayer?.exportHtml((data) => {
            setHTML(data.html);
        });
    }, []);

    const toggleActiveEditModal = useCallback(() => {
        setEditModal((editModal) => !editModal);
    }, []);

    const HTMLactivator = <Button onClick={toggleActiveHTML}>HTML</Button>;

    const EditModalActivator = <Button variant="plain" icon={EditMajor} onClick={toggleActiveEditModal}></Button>

    const HTMLPreview = (
        <ReactCodeMirror
            value={htmlCode}
            minHeight="680"
            readOnly={true}
            extensions={[html()]}
        >
        </ReactCodeMirror>
    )

    return (
        <div style={{

        }}>
            <Layout>
                <Layout.Section>
                    <Card>
                        <Grid columns={{ sm: 3 }}>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 8 }}>
                                <Text variant="headingXl" as="h2" alignment="start">
                                    {props.template.name}
                                    <Modal
                                        size="large"
                                        activator={EditModalActivator}
                                        open={editModal}
                                        onClose={toggleActiveEditModal}
                                        title="Edit Template"
                                        primaryAction={{
                                            content: 'Save',
                                            onAction: saveDesign,
                                        }}
                                        secondaryActions={[
                                            {
                                                content: 'Cancel',
                                                onAction: toggleActiveEditModal,
                                            },
                                        ]}
                                    >
                                        <Modal.Section>
                                            <Form onSubmit={saveDesign}>
                                                <FormLayout>
                                                    <TextField
                                                        value={name}
                                                        onChange={handleNameChange}
                                                        label="Template Name"
                                                        type="text"
                                                        autoComplete=""
                                                    />
                                                </FormLayout>
                                            </Form>
                                        </Modal.Section>
                                    </Modal>
                                </Text>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
                                <InlineGrid gap="400" columns={4}>
                                    <Modal
                                        size="large"
                                        activator={HTMLactivator}
                                        open={activeHTML}
                                        onClose={toggleActiveHTML}
                                        title="Code"
                                        primaryAction={{
                                            content: 'Copy',
                                            onAction: CopyHTML,
                                        }}
                                        secondaryActions={[
                                            {
                                                content: 'Cancel',
                                                onAction: toggleActiveHTML,
                                            },
                                        ]}
                                    >
                                        {toastMarkupClipboard}
                                        <Modal.Section>
                                            {HTMLPreview}
                                        </Modal.Section>
                                    </Modal>
                                    <Button variant="primary" tone='critical'>Delete</Button>
                                    {isSaving ? (
                                        <Button loading>Save</Button>
                                    ) : (
                                        <Button variant="primary" tone='success' onClick={saveDesign}>Save</Button>

                                    )}
                                    {toastMarkupSavingTimeout}
                                    <Button url='/app/templates' tone='critical'>Leave</Button>
                                </InlineGrid>
                            </Grid.Cell>
                        </Grid>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <EmailEditor
                            ref={emailEditorRef}
                            onLoad={onLoad}
                            onReady={onReady}
                            minHeight={680}
                            options={{
                                appearance: undefined,
                                features: {
                                    preview: true,
                                    stockImages: true,
                                    undoRedo: true
                                },
                                translations: {
                                    en: {
                                        "tools.tabs.images": "Stock Images"
                                    }
                                },
                                tools: {
                                    image: {
                                        enabled: true
                                    }
                                },
                                locale: "en-US",
                                customJS: [
                                    window.location.protocol + '//' + window.location.host + '/app/components/tools/custom.js',
                                ],
                                blocks: [
                                    ...ProductGrid,
                                    ...ProductInfo,
                                    ...ButtonCustom,
                                    ...DegistBlock,
                                    ...LogoBlock,
                                    ...ImageGallery,
                                ]
                            }}
                        />
                    </Card>
                </Layout.Section>
            </Layout>
        </div >
    )
}
