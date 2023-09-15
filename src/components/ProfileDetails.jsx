import React from "react";

export const ProfileDetails = () => {
  return (
    <section>
      <section>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>
      </section>
      <form>
        <label htmlFor="profile_pic">Profile picture</label>
        <input type="image" id="profile_pic" />
        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </form>
      <form>
        <label htmlFor="profile_first_name"></label>
        <input
          id="profile_first_name"
          type="text"
          placeholder="e.g. John"
          required
        />
        <label htmlFor="profile_last_name"></label>
        <input
          id="profile_last_name"
          type="text"
          placeholder="e.g. Appleseed"
          required
        />
        <label htmlFor="profile_email"></label>
        <input
          id="profile_first_email"
          type="email"
          placeholder="e.g. email@example.com"
        />
      </form>
    </section>
  );
};
