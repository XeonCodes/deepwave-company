import { SessionOptions } from "iron-session";

export interface SessionData {
  userID?: string;
  email?: string;
  userImage?: string;
  isPro?: boolean;
  isLoggedIn: boolean;
  isBlocked?: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRETE_KEY!,
  cookieName: "dex",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
  },
};
