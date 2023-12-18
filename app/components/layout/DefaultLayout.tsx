
import { useNavigate } from "@remix-run/react";
import { ActionList, Frame, Icon, Text, TopBar } from "@shopify/polaris";
import { SettingsMinor, QuestionMarkMajor, ArrowRightMinor } from "@shopify/polaris-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { getMerchantInitials } from "~/helpers";
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
    const [searchValue, setSearchValue] = useState('');
    const timeoutRef = useRef<number | null>(null);
    const [searchResultsMarkup, setSearchResultsMarkup] = useState(
        <ActionList
            items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]}
        />
    )

    useEffect(() => {
        // Clear the previous timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (searchValue.length > 0) {
            // Set a new timeout to check for inactivity after 1 second
            timeoutRef.current = setTimeout(() => {
                setIsSearchActive(true);
            }, 1000) as any; // Bypass type checking
        } else {
            // If searchValue is empty, set isSearchActive to false immediately
            setIsSearchActive(false);
        }
        // Clean up the timeout on component unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [searchValue]);

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
        setIsSearchActive(false);
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
            searchResults={searchResultsMarkup}
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