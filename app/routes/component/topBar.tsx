import { TopBar, Icon, Text } from "@shopify/polaris";
import {
    ArrowLeftMinor,
    NotificationMajor,
    SettingsMinor,
} from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticate } from "../../shopify.server";

// Start Loader
//loader la de fetch du lieu luc dau ve

export async function loader({ request }: LoaderFunctionArgs) {
    const { admin, session } = await authenticate.admin(request);
    return json(admin.rest.resources.Shop.all({ session }));
}
// End Loader

const TopBarMarkup = () => {
    const shop = useLoaderData();

    console.log(shop);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        []
    );

    const toggleIsSecondaryMenuOpen = useCallback(
        () =>
            setIsSecondaryMenuOpen(
                (isSecondaryMenuOpen) => !isSecondaryMenuOpen
            ),
        []
    );

    console.log(shop);

    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={[
                {
                    items: [
                        {
                            content: "User Setting",
                            icon: SettingsMinor,
                            url: "../user_setting",
                        },
                    ],
                },
                {
                    items: [
                        {
                            content: "Back to Shopify",
                            icon: ArrowLeftMinor,
                            url: "#", // link to shopify dev
                        },
                    ],
                },
            ]}
            name="tmp"
            detail="tmp2"
            initials="D"
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
        />
    );

    const secondaryMenuMarkup = (
        <TopBar.Menu
            activatorContent={
                <span>
                    <Icon source={NotificationMajor} />
                    <Text as="span" visuallyHidden>
                        Secondary menu
                    </Text>
                </span>
            }
            open={isSecondaryMenuOpen}
            onOpen={toggleIsSecondaryMenuOpen}
            onClose={toggleIsSecondaryMenuOpen}
            actions={[
                {
                    items: [
                        {
                            content: "Some notifiaction yeah!!",
                        },
                    ],
                },
            ]}
        />
    );

    return (
        <TopBar
            showNavigationToggle
            userMenu={userMenuMarkup}
            secondaryMenu={secondaryMenuMarkup}
        />
    );
};

const logo = {
    topBarSource:
        "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png", // need design logo
    width: 86,
    url: "../",
    accessibilityLabel: "TMT Automation",
};

export { TopBarMarkup, logo };
