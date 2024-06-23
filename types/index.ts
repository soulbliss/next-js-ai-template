export interface RootLayoutProps {
  children: React.ReactNode;
}

export type FeaturePageProps = {
  params: {
    feature: string;
  };
};

export type ResendContact = {
  email: string;
  first_name: string;
  last_name: string;
  unsubscribed: boolean;
};
