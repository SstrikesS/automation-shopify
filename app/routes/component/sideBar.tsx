import { Navigation } from "@shopify/polaris";
import { HomeMinor, TemplateMinor, AffiliateMajor, CustomersMajor, AutomationMajor } from "@shopify/polaris-icons";
export const SideBar = (
    <Navigation location="/">
        <Navigation.Section
            items={[
                {
                    url: "../",
                    label: "Home",
                    icon: HomeMinor,
                },
                {
                    url: "../templates",
                    label: "Template",
                    icon: TemplateMinor,
                },
                {
                    url: "../flows",
                    label: "Flows",
                    icon: AffiliateMajor,
                },
                {
                    url: "../customer",
                    label: "Customer",
                    icon: CustomersMajor,
                },
                {
                    url: "../automation",
                    label: "Automation",
                    icon: AutomationMajor,
                },
            ]}
        ></Navigation.Section>
    </Navigation>
);
