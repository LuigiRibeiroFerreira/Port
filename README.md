# Product Backlog

## **Epic 1: Content Management & Architecture**
**Goal**: Decouple content from components, improve scalability, and organize folders.

### User Stories:
1. **Move All Text to JSON Files**  
   - **Description**: Store all static text (e.g., home content, projects, skills) in JSON files.  
   - **Acceptance Criteria**:  
     - Create a `/content` folder with `home.json`, `about.json`, `projects.json`, `blog.json`, etc.  
     - Use Angular services to fetch and inject JSON data into components.  
   - **Priority**: High ⚠️  
   - **Dependencies**: None  

2. **Create Reusable Components for Dynamic Content**  
   - **Description**: Build components like `ContentCardComponent` and `FeedComponent` to render JSON data dynamically.  
   - **Acceptance Criteria**:  
     - Components accept `@Input()` props (e.g., `data`, `type`) to display content from JSON.  
   - **Priority**: High ⚠️  
   - **Dependencies**: User Story 1  

3. **Restructure Folders for Scalability**  
   - **Description**: Reorganize the project into a modular structure.  
   - **Acceptance Criteria**:  
     ```plaintext
     src/app/
     ├── core/                  # Singleton services, interceptors
     ├── shared/               # Reusable components (navbar, footer, cards)
     ├── features/             # Feature modules (home, blog, projects, about)
     │    ├── home/            # Home page module
     │    ├── blog/            # Blog module (with subfolders: data, components)
     │    └── ...              # Other modules
     ├── models/               # Interfaces (e.g., `Post`, `Project`)
     ├── content/              # JSON files for static content
     └── assets/               # Images, styles, fonts
     ```  
   - **Priority**: High ⚠️  

---

## **Epic 2: Routing & Page Structure**
**Goal**: Replace conditional rendering with proper routing and define new pages.

### User Stories:
4. **Implement Angular Routing**  
   - **Description**: Define routes for all pages (Home, About, Projects, Blog).  
   - **Acceptance Criteria**:  
     - Routes: `/`, `/about`, `/projects`, `/blog`, `/blog/:post-id`.  
     - Use lazy loading for feature modules.  
   - **Priority**: High ⚠️  

5. **Redesign Pages**  
   - **Description**: Create four main pages:  
     - **Home**: Twitter-like feed aggregating latest content (projects, blog posts).  
     - **About**: Professional bio, work experience, education.  
     - **Projects**: Grid/cards of projects with filters.  
     - **Blog**: Articles with categories (tech tutorials, updates).  
   - **Acceptance Criteria**:  
     - Each page loads content from JSON via services.  
   - **Priority**: High ⚠️  

6. **Home Page Feed Logic**  
   - **Description**: Automatically display latest content from other pages.  
   - **Acceptance Criteria**:  
     - Create a `FeedService` to aggregate and sort content by date from `projects.json` and `blog.json`.  
   - **Priority**: Medium 🔵  

---

## **Epic 3: Professional Polish & Good Practices**
**Goal**: Improve code quality, design, and maintainability.

### User Stories:
7. **Add a Footer with Social Links**  
   - **Description**: Footer component with icons/links to LinkedIn, GitHub, etc.  
   - **Acceptance Criteria**:  
     - Data for social links stored in `content/social.json`.  
   - **Priority**: Medium 🔵  

8. **Implement Angular Material or Tailwind CSS**  
   - **Description**: Use a design system for consistent styling.  
   - **Acceptance Criteria**:  
     - Buttons, cards, and forms follow a unified style.  
   - **Priority**: Medium 🔵  

9. **SEO Optimization**  
   - **Description**: Add meta tags, alt text, and pre-rendering.  
   - **Acceptance Criteria**:  
     - Use `Angular Universal` or `Scully` for static site generation.  
   - **Priority**: Low ⚪  

10. **Unit Tests**  
    - **Description**: Add basic tests for components/services.  
    - **Acceptance Criteria**:  
      - 70%+ test coverage for critical components.  
    - **Priority**: Low ⚪  

---

## **Epic 4: Blog System**
**Goal**: Build a scalable blog with automatic home feed updates.

### User Stories:
11. **Blog Post Architecture**  
    - **Description**: Store blog posts in JSON with metadata (date, tags, author).  
    - **Acceptance Criteria**:  
      - `blog.json` includes fields like `id`, `title`, `date`, `contentPath` (to markdown files).  
    - **Priority**: High ⚠️  

12. **Markdown Support for Blog Posts**  
    - **Description**: Write blog content in markdown and render it dynamically.  
    - **Acceptance Criteria**:  
      - Use `ngx-markdown` or a custom pipe to render `.md` files.  
    - **Priority**: Medium 🔵  

13. **Blog Tags & Search**  
    - **Description**: Filter posts by tags or search terms.  
    - **Acceptance Criteria**:  
      - Add a search bar and tag filters to the blog page.  
    - **Priority**: Low ⚪  

---

## **Epic 5: Deployment & Maintenance**
**Goal**: Ensure the app is production-ready.

### User Stories:
14. **Deploy to Vercel/Netlify**  
    - **Description**: Set up CI/CD for automatic deployment.  
    - **Acceptance Criteria**:  
      - Connect GitHub repo to Vercel/Netlify.  
    - **Priority**: Medium 🔵  

15. **Analytics Integration**  
    - **Description**: Add Google Analytics or Plausible.  
    - **Acceptance Criteria**:  
      - Track page views and interactions.  
    - **Priority**: Low ⚪  

---

## **Priority Legend**
- ⚠️ High: Core functionality, required for MVP.
- 🔵 Medium: Important but not critical.
- ⚪ Low: Nice-to-have enhancements.

---

## **Suggested Order of Execution**
1. **High-Priority**:  
   - User Stories 1 (JSON content), 3 (folder structure), 4 (routing), 5 (pages).  
2. **Medium-Priority**:  
   - User Stories 2 (reusable components), 7 (footer), 11 (blog JSON).  
3. **Low-Priority**:  
   - User Stories 9 (SEO), 12 (markdown), 14 (deployment).  
