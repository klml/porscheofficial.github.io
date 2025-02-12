import type { MDXComponents } from "mdx/types";
import { Heading } from "./components/01_atoms/Heading";
import { TextList, TextListItem } from "./components/01_atoms/TextList";
import { LinkPure } from "./components/01_atoms/LinkPure";
import { Codeblock } from "./components/02_molecules/codeblock/Codeblock";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <Heading
        align="center"
        size={{ base: "large", s: "x-large" }}
        theme="dark"
        tag="h1"
      >
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading
        size={{ base: "medium", s: "large" }}
        align="left"
        theme="dark"
        tag="h2"
      >
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading
        size={{ base: "small", s: "medium" }}
        align="left"
        theme="dark"
        tag="h3"
      >
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading
        size={{ base: "small", s: "small" }}
        align="left"
        theme="dark"
        tag="h4"
      >
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading
        size={{ base: "small", s: "small" }}
        align="left"
        theme="dark"
        tag="h5"
      >
        {children}
      </Heading>
    ),
    ul: ({ children }) => <TextList theme="dark">{children}</TextList>,
    ol: ({ children }) => (
      <TextList theme="dark" type="numbered">
        {children}
      </TextList>
    ),
    li: ({ children }) => <TextListItem>{children}</TextListItem>,
    code: ({ children, ...props }) => (
      <Codeblock wrapperClassName={props.className}>{children}</Codeblock>
    ),
    a: ({ children, ...props }) => (
      <LinkPure theme="dark" underline icon="none" href={props.href}>
        {children}
      </LinkPure>
    ),
    ...components,
  };
};

export default useMDXComponents;
