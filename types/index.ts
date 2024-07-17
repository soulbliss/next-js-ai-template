export interface RootLayoutProps {
  children: React.ReactNode;
}

export type FeaturePageProps = {
  params: {
    feature: string;
  };
};

export type EmailContact = {
  email: string;
  firstName: string;
  lastName: string;
  source?: string;
  subscribed: boolean;
  userGroup?: string;
  userId?: string;
  mailingLists?: Record<string, boolean>;
};
