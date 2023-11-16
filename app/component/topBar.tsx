import { TopBar, Icon, Text, Spinner, ResourceList, ResourceItem, Avatar } from "@shopify/polaris";
import {
    ArrowLeftMinor,
    NotificationMajor,
    SettingsMinor,
} from "@shopify/polaris-icons";
import { useState, useCallback, useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useDebounce } from "./useDebounce";
import { searchTemplates } from "~/models/templates";
// Start Loader
// loader la de fetch du lieu luc dau ve

export async function loader({ request }: LoaderFunctionArgs) {
    const user = await shopify.user();

    return json({ user });
}
// End Loader

const TopBarMarkup = () => {
    const user_data = useLoaderData<typeof loader>();
    console.log(user_data); // null ???


    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [debouncedQuery, isDebouncing] = useDebounce(searchValue, 500);
    const [searchResult, setSearchResult] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await searchTemplates(debouncedQuery, 4);
                setSearchResult(data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        fetchData();
    }, [debouncedQuery]);
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

    const handleSearchChange = useCallback((value: string) => {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
    }, []);

    const searchResultsMarkup = () => {
        if (isDebouncing) {
            return (
                <Spinner accessibilityLabel="Small spinner example" size="small" />
            );
        } else {
            return (
                <ResourceList
                    resourceName={{ singular: 'template', plural: 'templates' }}
                    items={searchResult}
                    renderItem={(item) => {
                        const { id, image, name } = item;
                        return (
                            <ResourceItem
                                verticalAlignment="center"
                                id={id}
                                url=""
                                media={
                                    <Avatar customer size="md" name={name} source={image} />
                                }
                                accessibilityLabel={`View details for ${name}`}
                                name={name}
                            >
                                <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {name}
                                </Text>
                            </ResourceItem>
                        );
                    }}
                />
            );
        }
    }

    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search"
            showFocusBorder
        />
    );

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
            name="a"
            detail="b"
            initials="C"
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
            searchResultsVisible={isSearchActive}
            searchField={searchFieldMarkup}
            searchResults={searchResultsMarkup()}
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
