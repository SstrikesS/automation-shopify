import { AppProvider, Frame } from "@shopify/polaris";
import { SideBar } from "./component/sideBar";
import { TopBarMarkup, logo } from "./component/topBar";
export default function TemplatesPage() {
    return (
        <div>
            <AppProvider
                theme="light"
                i18n={{
                    Polaris: {
                        TopBar: {
                            toggleMenuLabel: "Toggle menu",
                            style: {
                                background: "red",
                            },
                        },
                        Frame: {
                            skipToContent: "Skip to content",
                            navigationLabel: "Navigation",
                            Navigation: {
                                closeMobileNavigationLabel: "Close navigation",
                            },
                        },
                    },
                }}
            ></AppProvider>
            <Frame
                navigation={SideBar}
                topBar={TopBarMarkup()}
                logo={logo}
            ></Frame>
        </div>
    );
}
