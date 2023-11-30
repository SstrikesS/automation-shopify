
import React, { useRef, useState } from "react";

import type { EditorRef, EmailEditorProps } from "react-email-editor";
import EmailEditor from "react-email-editor";
import sample from "../samples/sample.json";
import { ProductInfo, ProductGrid, ButtonCustom, DegistBlock, LogoBlock, ImageGallery } from "../blocks/block";
export default function EmailTemplateEitor() {

    const emailEditorRef = useRef<EditorRef | null>(null);
    // const [preview, setPreview] = useState(false);

    // const saveDesign = () => {

    //     const unlayer = emailEditorRef.current?.editor;

    //     unlayer?.saveDesign((design: any) => {
    //         console.log('saveDesign', design);
    //     })
    // }

    // const exportHTML = () => {
    //     const unlayer = emailEditorRef.current?.editor;

    //     unlayer?.exportHtml((data) => {
    //         const { design, html } = data;

    //         console.log({ design, html });
    //     })
    // }
    // const togglePreview = () => {
    //     const unlayer = emailEditorRef.current?.editor;

    //     if (preview) {
    //         unlayer?.hidePreview();
    //         setPreview(false);
    //     } else {
    //         unlayer?.showPreview('desktop');
    //         setPreview(true);
    //     }
    // }

    const onReady: EmailEditorProps['onReady'] = (unlayer) => {
        console.log('onReady', unlayer);
    }

    const onDesignLoad = (data: any) => {
        console.log('onDesignLoad', data);
    }

    const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
        console.log('onLoad', unlayer);
        unlayer.addEventListener('design:loaded', onDesignLoad);
        unlayer.loadDesign(sample);
    }
    return (
        <EmailEditor
            ref={emailEditorRef}
            onLoad={onLoad}
            onReady={onReady}
            minHeight={700}
            options={{
                appearance: undefined,
                features: {
                    preview: false,
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
    )
}