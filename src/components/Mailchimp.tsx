"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };




  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        action={mailchimp.action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <Flex id="mc_embed_signup_scroll" fillWidth maxWidth={24} mobileDirection="column" gap="8">



          <div className="clear">
            <Flex height="48" vertical="center">
              <Button id="mc-embedded-subscribe" value="Subscribe" size="m" fillWidth>
                Subscribe My Email
              </Button>
            </Flex>
          </div>
          <div className="clear">
            <Flex height="48" vertical="center">
              <Button
                id="instagram-follow-button"
                value="Follow"
                size="m"
                fillWidth

                style={{
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                  border: "none",
                }}
              >
                <a href="https://www.instagram.com/fadi2ooo.jpeg?igsh=MXRhcjNhbnN2Z28xbw==" target="_blank" rel="noopener noreferrer">
                  Follow my Instagram
                </a>
              </Button>

            </Flex>
          </div>
        </Flex>
      </form>
    </Column>
  );
};
