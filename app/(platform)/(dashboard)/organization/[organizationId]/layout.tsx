import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

import OrgControl from "./_components/OrgControl";

import { childrenProps } from "@/types";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

const OrganizationIdLayout = ({ children }: childrenProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
