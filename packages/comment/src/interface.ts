export type CommentOptions = {
  // Container: id or element
  container: any;
  // GitHub Application Client ID
  clientID: string;
  // GitHub Application Client Secret
  clientSecret: string;
  // GitHub repository
  repo: string;
  // GitHub repository owner. Can be personal user or organization
  owner: string;
  // GitHub repository owner and collaborators. (Users who having write access to this repository)
  admin: string[];
  // Ensure uniqueness and length less than 50
  id: string;
};
