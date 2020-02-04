"use strict";

{
  const profile = document.getElementById("profile");
  const profileImg = document.getElementById("profile-img");

  profile.addEventListener("mouseover", () => {
    profileImg.classList.remove("hidden");
    profileImg.classList.add("active");
  });

  const blog = document.getElementById("blog");
  const blogImg = document.getElementById("blog-img");

  blog.addEventListener("mouseover", () => {
    blogImg.classList.remove("hidden");
    blogImg.classList.add("active");
  });

  const bbs = document.getElementById("bbs");
  const bbsImg = document.getElementById("bbs-img");

  bbs.addEventListener("mouseover", () => {
    bbsImg.classList.remove("hidden");
    bbsImg.classList.add("active");
  });

  const discography = document.getElementById("discography");
  const discographyImg = document.getElementById("discography-img");

  discography.addEventListener("mouseover", () => {
    discographyImg.classList.remove("hidden");
    discographyImg.classList.add("active");
  });

  const biography = document.getElementById("biography");
  const biographyImg = document.getElementById("biography-img");

  biography.addEventListener("mouseover", () => {
    biographyImg.classList.remove("hidden");
    biographyImg.classList.add("active");
  });

  const link = document.getElementById("link");
  const linkImg = document.getElementById("link-img");

  link.addEventListener("mouseover", () => {
    linkImg.classList.remove("hidden");
    linkImg.classList.add("active");
  });
}
