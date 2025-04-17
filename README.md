# Product Backlog

## **Epic 1: Content Management & Architecture**
**Goal**: Decouple content from components, improve scalability, and organize folders.

### User Stories:
1. **Move All Text to JSON Files**  
   - **Description**: Store all static text (e.g., home content, projects, skills) in JSON files.  
   - **Acceptance Criteria**:  
     - Create a `/content` folder with `home.json`, `about.json`, `projects.json`, `blog.json`, etc.  
     - Use Angular services to fetch and inject JSON data into components.  
   - **Priority**: ✅ Done  
   - **Dependencies**: None  

2. **Create Reusable Components for Dynamic Content**  
   - **Description**: Build components like `ContentCardComponent` and `FeedComponent` to render JSON data dynamically.  
   - **Acceptance Criteria**:  
     - Components accept `@Input()` props (e.g., `data`, `type`) to display content from JSON.  
   - **Priority**: ✅ Done
   - **Dependencies**: User Story 1  

3. **Restructure Folders for Scalability**  
   - **Description**: Reorganize the project into a modular structure.  
   - **Acceptance Criteria**:  
   - **Priority**: ✅ Done

---

## **Epic 2: Routing & Page Structure**
**Goal**: Replace conditional rendering with proper routing and define new pages.

### User Stories:
4. **Implement Angular Routing**  
   - **Description**: Define routes for all pages (Home, About, Projects, Blog).  
   - **Acceptance Criteria**:  
     - Routes: `/`, `/about`, `/projects`, `/blog`.  
     - Use lazy loading for feature modules.  
   - **Priority**: ✅ Done 

5. **Redesign Pages**  
   - **Description**: Create four main pages:  
     - **Home**: Hero.  
     - **About**: Professional bio, work experience, education, skills.  
     - **Projects**: Grid/cards of projects with filters.  
     - **Blog**: Articles (tech tutorials, updates).  
   - **Acceptance Criteria**:  
     - Each page loads content from JSON via services.  
   - **Priority**: ✅ Done 

6. **Home Page**  
   - **Description**: Just the hero.  
   - **Priority**: ✅ Done 

---

## **Epic 3: Professional Polish & Good Practices**
**Goal**: Improve code quality, design, and maintainability.

### User Stories:
7. **Add a Footer with Social Links**  
   - **Description**: Footer component with icons/links to LinkedIn, GitHub, etc.  
   - **Priority**: ✅ Done 



8. **Unit Tests**  
    - **Description**: Add basic tests for components/services.  
    - **Acceptance Criteria**:  
      - 70%+ test coverage for critical components.  
    - **Priority**: ✅ Done

---

## **Epic 4: Blog System**
**Goal**: Build a scalable blog with automatic home feed updates.

### User Stories:
9. **Blog Post Architecture**  
    - **Description**: Store blog posts in JSON with metadata (date, tags, author).  
    - **Acceptance Criteria**:  
      - `blog.json` includes fields like `id`, `title`, `date`, `contentPath` (to markdown files).  
    - **Priority**: Low ⚪   

10. **Markdown Support for Blog Posts**  
    - **Description**: Write blog content in markdown and render it dynamically.  
    - **Acceptance Criteria**:  
      - Use `ngx-markdown` or a custom pipe to render `.md` files.  
    - **Priority**: Low ⚪   

11. **Blog Tags & Search**  
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
    - **Priority**: ✅ Done 

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
- ✅ Done: Task completed and verified.

---


