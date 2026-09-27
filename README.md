# Portfolio README

This portfolio is designed to be easy to personalize. Keep your content in the data files under `src/data/` and your images or documents in `public/` so you can update the site without changing the main React layout.

## Quick content update guide

## How to Update My Portfolio

All public content is intentionally kept in `src/data/` and all uploaded assets belong in `public/`. You can personalize the portfolio without changing the React components.

1. **Change my profile photo:** replace the file in `public/images/profile/` and update the image path in `src/App.tsx` if the filename changes.
2. **Add a childhood photo:** put it in `public/images/gallery/childhood/`, then copy an object in `src/data/gallery.ts` and set its category to `Childhood`.
3. **Add any gallery photo:** put it in the matching folder under `public/images/gallery/`, then add one object to `src/data/gallery.ts`.
4. **Add a certificate:** put its preview image in `public/images/certificates/`, then copy an object in `src/data/certificates.ts`.
5. **Add a certificate PDF:** put the PDF in `public/certificates/` and set the object's `pdf` path. Leave it empty when no PDF exists.
6. **Add an achievement:** copy an object in `src/data/achievements.ts` and add an optional image under `public/images/achievements/`.
7. **Add a project:** copy an object in `src/data/projects.ts`.
8. **Add education:** update the `education` data near the top of `src/App.tsx`; use `Add period` until the real period is known.
9. **Add a journey item:** copy an object in `src/data/journey.ts`. Keep `Year to add` until a verified year is available.
10. **Change social links:** update `contactLinks` near the top of `src/App.tsx`.
11. **Add my CV:** replace `public/Sreyneang-CV.pdf`, or update the download link in `src/App.tsx`.

For personal privacy, only add photos and documents that you intentionally want to publish. Do not upload IDs, addresses, private family information, or sensitive documents.

### 1. Where to add my profile photo
- File: `public/images/profile/profile-photo.svg`
- Replace the placeholder SVG with your actual portrait, ideally a square crop for the hero card.
- Keep the filename as `profile-photo.svg` or update the path in `src/App.tsx`.

### 2. Where to add childhood photos
- Folder: `public/images/gallery/childhood/`
- Add your real images here and update the objects in `src/data/gallery.ts`.

### 3. Where to add university photos
- Folder: `public/images/gallery/university/`
- Add the images and update the matching entries in `src/data/gallery.ts`.

### 4. Where to add work photos
- Folder: `public/images/gallery/work/`
- Add work-life images and edit the gallery object for that category.

### 5. Where to add certificates
- Folder: `public/images/certificates/`
- Add image files, then update the `certificateItems` array in `src/data/certificates.ts`.
- If your certificate has a PDF, place it in `public/certificates/` and add its path to the `pdf` field.

### 6. Where to add achievement images
- Folder: `public/images/gallery/achievements/` or any suitable folder in `public/images/`
- Add the image and update the `image` field in `src/data/achievements.ts`.

### 7. Where to add PDFs
- Folder: `public/certificates/`
- Add files such as `qa-testing.pdf` and `web-dev.pdf`, then reference them in the certificate data.

### 8. Where to edit my About Me
- File: `src/App.tsx`
- Update the text in the About Me section.

### 9. Where to edit my skills
- File: `src/App.tsx`
- Update the `skillGroups` array near the top of the component.

### 10. Where to edit projects
- File: `src/data/projects.ts`
- Add a new project object to the `portfolioProjects` array.

### 11. Where to edit experience
- File: `src/App.tsx`
- Update the `experience` array near the top of the component.

### 12. Where to edit social links
- File: `src/App.tsx`
- Update the `contactLinks` array in the component.

### 13. Where to add my CV
- File: `public/Sreyneang-CV.pdf`
- Replace this file with your own PDF, or update the download link if you rename it.

## How to add a new photo

1. Put the image in the correct folder inside `public/images/gallery/`.
2. Open `src/data/gallery.ts`.
3. Copy one photo object and change the values.

Example:

```ts
{
  id: 9,
  image: "/images/gallery/university/your-photo.jpg",
  title: "New University Photo",
  category: "University",
  year: "2022",
  description: "A milestone from my university journey.",
  featured: false,
}
```

## How to add a certificate

1. Place the certificate image in `public/images/certificates/`.
2. Place the PDF in `public/certificates/` if available.
3. Open `src/data/certificates.ts`.
4. Add a new object to `certificateItems`.

Example:

```ts
{
  id: 4,
  title: "Data Analysis Certificate",
  organization: "Learning Institute",
  date: "2026",
  category: "Programming",
  image: "/images/certificates/data-analysis.jpg",
  pdf: "/certificates/data-analysis.pdf",
  description: "Completed a training program focused on practical analysis and problem-solving.",
  featured: false,
}
```

## How to add an achievement

1. Add an image to `public/images/` if you want one.
2. Open `src/data/achievements.ts`.
3. Add a new achievement object.

Example:

```ts
{
  id: 5,
  title: "Volunteer Leadership",
  year: "2025",
  organization: "Community Support Group",
  category: "Volunteer",
  description: "Led community support activities and contributed to a positive learning environment.",
  image: "/images/gallery/memories/placeholder-06.svg",
  featured: false,
  link: "https://example.com",
}
```

## How to add a project

1. Open `src/data/projects.ts`.
2. Add an object to `portfolioProjects`.

Example:

```ts
{
  id: 4,
  name: "Quality Dashboard",
  category: "QA Workflow Tool",
  description: "A project focused on tracking defects and release validation.",
  technologies: ["React", "TypeScript", "Testing"],
  contribution: "Designed the interface, test flows, and validation process for the product.",
  projectLink: "",
  githubLink: "",
}
```

## Project structure

- `src/App.tsx` � layout and page sections
- `src/data/projects.ts` � project cards
- `src/data/gallery.ts` � personal journey gallery data
- `src/data/certificates.ts` � certificates and PDFs
- `src/data/achievements.ts` � achievement timeline cards
- `public/images/` � all visual assets
- `public/certificates/` � PDF files and certificate documents

## Privacy reminder

Only publish photos and information you are comfortable sharing publicly. Avoid posting private addresses, phone numbers, documents, personal IDs, or sensitive family information.

## Notes for future updates

- Keep all public assets inside `public/`.
- Keep all content updates in the `src/data/` files.
- Keep the portfolio simple and professional.
- Replace placeholders gradually with real photos, certificates, and project screenshots as they become available.
