import React from "react";
import { Button, ButtonProps, Group } from "@mantine/core";
import { MarkGithubIcon } from "@primer/octicons-react";
import {
  GoogleIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
} from "./SocialIcons";

export function GoogleButton(props) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}

export function FacebookButton(props) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      sx={(theme) => ({
        backgroundColor: "#4267B2",
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.fn.darken("#4267B2", 0.1),
        },
      })}
      {...props}
    />
  );
}

// Twitter button as anchor
export function TwitterButton(props) {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon />}
      variant="default"
      {...props}
    />
  );
}

export function GithubButton(props) {
  return (
    <Button
      {...props}
      leftIcon={<MarkGithubIcon />}
      sx={(theme) => ({
        backgroundColor:
          theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor:
            theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
    />
  );
}


export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
      <FacebookButton>Sign in with Facebook</FacebookButton>
      <GithubButton>Login with GitHub</GithubButton>
      <GithubButton>Login with GitHub</GithubButton>
    </Group>
  );
}
