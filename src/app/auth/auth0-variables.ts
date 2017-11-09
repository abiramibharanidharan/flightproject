interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'EIdUi-_qtDu9OSVh5vwpvsIaodev48PE',
  domain: 'keerthini.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
