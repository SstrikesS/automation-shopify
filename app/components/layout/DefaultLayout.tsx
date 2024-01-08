
// @ts-ignore
import { useQuery } from "@apollo/client";
import { useNavigate } from "@remix-run/react";
import { ActionList, Card, Frame, Icon, Text, TopBar } from "@shopify/polaris";
import { SettingsMinor, QuestionMarkMajor, ArrowRightMinor } from "@shopify/polaris-icons";
import { useCallback, useEffect, useState, useRef } from "react";
import { GET_TEMPLATES } from "~/graphql/query";
import { getMerchantInitials } from "~/helpers";
import SpinnerLayout from "./Spinner";
interface DefaultLayoutProps {
    children: any;
    handleLogout: () => void;
    shop: any;
}

export default function DefaultLayout({ children, handleLogout, shop }: DefaultLayoutProps) {
    const navigate = useNavigate();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const [searchValue, setSearchValue] = useState('');
    

    const { data: custom, loading: customLoading } = useQuery(GET_TEMPLATES, {
        variables: {
            input: {
                name: searchValue,
                status: true,
                store_id: `${shop.id}`,
                limit: 6,
                page: 1,
                sort_column: 'name',
                sort_value: 'asc',
            }
        }
    });

    const [searchResultsMarkup, setSearchResultsMarkup] = useState(
        <SpinnerLayout></SpinnerLayout>
    )

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (searchValue.length > 0) {
            if (!isSearchActive) {
                setIsSearchActive(true)
            }
            timeoutRef.current = setTimeout(() => {
                if (customLoading) {
                    setSearchResultsMarkup(
                        <SpinnerLayout></SpinnerLayout>
                    );
                } else if (custom?.getTemplates.templates.length === 0) {
                    setSearchResultsMarkup(
                        <p style={{ textAlign: 'center' }}>No result found</p>
                    );
                }
                else {
                    setSearchResultsMarkup(
                        <ActionList
                            items={custom?.getTemplates.templates.slice(0, 4).map((template: any) => ({
                                content: template.name,
                                helpText: "Template",
                                image: template.image,
                                onAction: () => { navigate(`../app/template/${template.id}`) }
                            }))}
                        />
                    );
                }

            }, 500) as any;

        } else {
            setSearchResultsMarkup(
                <SpinnerLayout></SpinnerLayout>
            );
            setIsSearchActive(false);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [custom]);

    const [shopData, setShopData] = useState({
        shop_owner: "undefined",
        myshopify_domain: "#",
    });

    useEffect(() => {
        setShopData(shop);
    }, [shop])

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        [],
    );

    const toggleIsSecondaryMenuOpen = useCallback(
        () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
        [],
    );

    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleSearchChange = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility');
    }, []);

    const logo = {
        width: 124,
        topBarSource:
            'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        url: '/app',
        accessibilityLabel: 'Logo',
    };

    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={[
                {
                    items: [
                        {
                            content: "User Setting",
                            icon: SettingsMinor,
                            onAction: () => navigate('app/user_setting'),
                        },
                    ],
                },
                {
                    items: [
                        {
                            content: 'Logout',
                            icon: ArrowRightMinor,
                            onAction: () => handleLogout()
                        }
                    ],
                },
            ]}
            name={shopData.shop_owner}
            initials={getMerchantInitials(shopData.shop_owner)}
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
        />
    );


    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search"
            showFocusBorder
        />
    );

    const secondaryMenuMarkup = (
        <TopBar.Menu
            activatorContent={
                <span>
                    <Icon source={QuestionMarkMajor} />
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
                    items: [{ content: 'Community forums' }],
                },
            ]}
        />
    );

    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            userMenu={userMenuMarkup}
            secondaryMenu={secondaryMenuMarkup}
            searchResultsVisible={isSearchActive}
            searchField={searchFieldMarkup}
            searchResults={<Card>{searchResultsMarkup}</Card>}
            onSearchResultsDismiss={handleSearchResultsDismiss}
            onNavigationToggle={handleNavigationToggle}
        />
    );

    return (
        <Frame topBar={topBarMarkup} logo={logo}>
            {children}
        </Frame>
    );
}