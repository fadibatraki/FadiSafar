import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
      style={{ marginTop: "-24px"  }}
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
        
      >
        <Text variant="body-default-xl" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">©  / </Text>

          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            Designed and Developed by{" "}
            <SmartLink href="https://t.me/Fadibatraki">
              Fadi Batraki
            </SmartLink>

          </Text>
        </Text>

      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
