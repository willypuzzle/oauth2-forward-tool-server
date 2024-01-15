import OAuth2Server from "oauth2-server";

class Model implements OAuth2Server.AuthorizationCodeModel, OAuth2Server.AuthorizationCodeModel, OAuth2Server.ClientCredentialsModel, OAuth2Server.PasswordModel, OAuth2Server.RefreshTokenModel, OAuth2Server.ExtensionModel{
    getAccessToken(accessToken: string, callback?: OAuth2Server.Callback<OAuth2Server.Token>): Promise<OAuth2Server.Token | OAuth2Server.Falsey> {
        return Promise.resolve(undefined);
    }

    getAuthorizationCode(authorizationCode: string, callback?: OAuth2Server.Callback<OAuth2Server.AuthorizationCode>): Promise<OAuth2Server.AuthorizationCode | OAuth2Server.Falsey> {
        return Promise.resolve(undefined);
    }

    getClient(clientId: string, clientSecret: string, callback?: OAuth2Server.Callback<OAuth2Server.Client | OAuth2Server.Falsey>): Promise<OAuth2Server.Client | OAuth2Server.Falsey> {
        return Promise.resolve(undefined);
    }

    revokeAuthorizationCode(code: OAuth2Server.AuthorizationCode, callback?: OAuth2Server.Callback<boolean>): Promise<boolean> {
        return Promise.resolve(false);
    }

    saveAuthorizationCode(code: Pick<OAuth2Server.AuthorizationCode, "authorizationCode" | "expiresAt" | "redirectUri" | "scope">, client: OAuth2Server.Client, user: OAuth2Server.User, callback?: OAuth2Server.Callback<OAuth2Server.AuthorizationCode>): Promise<OAuth2Server.AuthorizationCode | OAuth2Server.Falsey> {
        return Promise.resolve(undefined);
    }

    saveToken(token: OAuth2Server.Token, client: OAuth2Server.Client, user: OAuth2Server.User, callback?: OAuth2Server.Callback<OAuth2Server.Token>): Promise<OAuth2Server.Token | OAuth2Server.Falsey> {
        return Promise.resolve(undefined);
    }

    verifyScope(token: OAuth2Server.Token, scope: string | string[], callback?: OAuth2Server.Callback<boolean>): Promise<boolean> {
        return Promise.resolve(false);
    }
}

export default new Model();