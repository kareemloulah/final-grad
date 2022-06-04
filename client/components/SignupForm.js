import { useForm } from "@mantine/form";
import {
  PasswordInput,
  TextInput,
  Button,
  Box,
  Group,
  Divider,
  RadioGroup,
  Radio,
  Title,
} from "@mantine/core";
import isEmail from "validator/es/lib/isEmail";
import contains from "validator/es/lib/contains";
import { Redirect } from "react-router-dom";
import { useNotifications } from "@mantine/notifications";

// Icons
import { At, Lock } from "tabler-icons-react";
// Buttons
import {
  GoogleButton,
  FacebookButton,
  GithubButton,
  LinkedInButton,
} from "./SocialButtons/SocialButtons";
import { useState } from "react";
import axios, { authHeader } from "../apis/axios";
import { CheckIcon } from "@primer/octicons-react";

function Demo() {
  const [redirect, setRedirect] = useState(false);
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
      rule: "Student",
    },
    validate: {
      fname: (value, values) => {
        return value.length < 2
          ? "Name must have at least 2 letters"
          : null || value === values.lname
          ? "Your first name can't be your last name!"
          : null;
      },
      lname: (value, values) => {
        return value.length < 2
          ? "Name must have at least 2 letters"
          : null || value === values.fname
          ? "Same error!"
          : null;
      },
      email: (value) => {
        return isEmail(value) ? null : "Enter a valid email";
      },

      password: (value, values) => {
        return value.length < 8
          ? "Your password should be more than 8 in length"
          : null || contains(value, values.fname, { ignoreCase: true })
          ? "Your name can't be password!"
          : null || contains(value, values.lname, { ignoreCase: true })
          ? "Your last name can't be password!"
          : null ||
            contains(value, values.email.split("@")[0], { ignoreCase: true })
          ? "Your email can't be password!"
          : null;
      },
      confirmPassword: (value, values) => {
        return value !== values.password ? "Passwords did not match" : null;
      },
    },
  });

  const onSubmitHanddler = async (values) => {
    const id = notifications.showNotification({
      loading: true,
      title: "Search for you in the database 🔍",
      message: "It usualy takes 2 seconds! do some thing useful 🙂",
      autoClose: false,
      disallowClose: true,
    });

    try {
      const response = await axios.post("/users/add", {
        firstName: values.fname,
        lastName: values.lname,
        email: values.email,
        password: values.password,
        rule: values.rule,
      });

      localStorage.setItem("userMe", JSON.stringify(response.data.data));

      setTimeout(() => {
        notifications.updateNotification(id, {
          id,
          color: "teal",
          title: "We found you ! ✅",
          message: "Welcome, this will leave after saying AlHamdullah! 🙂",
          icon: <CheckIcon />,
          autoClose: 2000,
        });
        setRedirect(true);
      }, 3000);
    } catch (error) {
      console.log(error.message);
      setTimeout(() => {
        notifications.updateNotification(id, {
          id,
          color: "red",
          title: "Can't add user 😣 ",
          message: "This email is already in out databases! 🤥",
          icon: <CheckIcon />,
          autoClose: 2000,
        });
      }, 3000);
    }
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <Box sx={{ maxWidth: 660 }}>
      <form onSubmit={form.onSubmit(onSubmitHanddler)}>
        <Title
          order={1}
          sx={(theme) => ({
            color: theme.colors.mainBlue[6],
          })}
        >
          Register
        </Title>

        <RadioGroup
          value={form.values.rule}
          onChange={(value) => form.setFieldValue("rule", value)}
          label="Choose: How you wanna use courseme"
          description="You can change this in settings."
          spacing="xl"
          size="lg"
          required
          sx={(theme) => ({
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "space-between",
          })}
        >
          <Radio mr={135} value="Student" label="Student" />
          <Radio value="Instructor" label="Instructor" />
        </RadioGroup>
        <Group position="center" grow>
          <TextInput
            // required
            placeholder="First Name"
            mt="sm"
            size="lg"
            {...form.getInputProps("fname")}
          />

          <TextInput
            // required
            placeholder="Last Name"
            mt="sm"
            size="lg"
            {...form.getInputProps("lname")}
          />
        </Group>

        <TextInput
          icon={<At />}
          // required
          placeholder="mansour@mail.com"
          radius="xs"
          mt="sm"
          size="lg"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          // required
          placeholder="Your password"
          icon={<Lock size={16} />}
          radius="xs"
          mt="sm"
          size="lg"
          {...form.getInputProps("password")}
        />

        <PasswordInput
          // required
          placeholder="Confirm password"
          icon={<Lock size={16} />}
          radius="xs"
          mt="sm"
          size="lg"
          {...form.getInputProps("confirmPassword")}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="lg" fullWidth radius={5}>
            Register
          </Button>
        </Group>
      </form>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <GithubButton radius="xl">Github</GithubButton>
        <FacebookButton radius="xl">Facebook</FacebookButton>
        <LinkedInButton radius="xl">LinkedIn</LinkedInButton>
      </Group>
    </Box>
  );
}

export default Demo;
