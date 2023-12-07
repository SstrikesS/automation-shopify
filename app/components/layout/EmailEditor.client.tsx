
import React, { useRef } from "react";

import type { EditorRef, EmailEditorProps } from "react-email-editor";
import EmailEditor from "react-email-editor";
import { ProductInfo, ProductGrid, ButtonCustom, DegistBlock, LogoBlock, ImageGallery } from "../blocks/block";
import {Box, Button, Icon, Layout, Text} from "@shopify/polaris";
import { EditMajor } from '@shopify/polaris-icons';
export default function EmailTemplateEditor(props: { template: any }) {

    const emailEditorRef = useRef<EditorRef | null>(null);
    const template = props.template;
    console.log(window.location.protocol + '//' + window.location.host + '/app/components/tools/custom.js')
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
        unlayer.loadDesign(template.data);
    }
    return (
      <div>
        <div style={{
          height: "120px",
        }}>

          <Layout>
            <Layout.Section variant="oneHalf">
              <Text variant="headingXl" as="strong" alignment="start">
                Edit Templates
              </Text>
              <div style={{display: 'flex'}}>
                <Box borderStyle='solid' width='80%' borderColor="border" borderWidth="025" padding='200'>
                  <p style={{fontSize: '18px', marginLeft: '5%'}}>Template Name</p>
                </Box>
                <Button><Icon source={EditMajor}/></Button>
              </div>
            </Layout.Section>
            <Layout.Section variant="oneHalf">
              <div className="Polaris-Flex Polaris-Flex--justifyEnd"
                   style={{display: 'flex', gap: '5px', marginTop: '25px', left: '65%', position: 'relative'}}>
                <Button id='button1'>Preview</Button>
                <Button variant="primary" id='button1'> Export</Button>
                <Button variant="primary" id='button1' tone='success'>Save</Button>
                <Button id='button1' url='/dashboard' tone='critical'>Leave</Button>
              </div>
            </Layout.Section>
          </Layout>
        </div>
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
      </div>

)
}
