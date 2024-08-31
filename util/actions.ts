"use server";

import { defaultSession, SessionData, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getIronSession } from "iron-session";

let username = "john";
let isPro = true;
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // Check User in the database

  // CHECK THE USER STATUS
  session.isBlocked = isBlocked;

  if (formUsername !== username) {
    return { error: "wrong credentials" };
  }

  session.userID = "1";
  session.username = username;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};

export const ChangePremium = async () => {
  const session = await getSession();

  // Update user
  session.isPro = !session.isPro;
  session.save();

  // Reload session data
  revalidatePath("/profile");
};

export const testRedirect = () => {
  redirect("/");
};
