// prompt for cursor

You are a senior product designer, creative frontend engineer, and interaction designer.

You are working on the existing ABTalks 60-Day Coding Challenge project.

IMPORTANT:
- First inspect the entire existing codebase before making changes.
- Do NOT blindly rebuild the project from scratch.
- Preserve the existing ABTalks brand, content, routes, challenge logic, submission flow, and useful components.
- Improve the product substantially from a UX/UI and interaction perspective.
- The current project is a static HTML/CSS/JavaScript application with:
  /                  -> landing page
  /dashboard/        -> dashboard
  /day/12/           -> challenge/submission page
  styles.css
  script.js
  dashboard.js
  day.js
  data.js
- The existing submission flow uses localStorage. Preserve this functionality and extend it where necessary.
- The final result must work without a backend.
- Do not introduce unnecessary complexity.
- Keep the application responsive, especially for mobile because the primary users are college students using phones.
- Make the result feel like a polished startup product, not a college project.

==================================================
PRODUCT CONTEXT
==================================================

ABTalks runs a 60-day coding challenge for Indian college students.

The student:
1. Creates an account.
2. Chooses/gets a coding track.
3. Builds something every day for 60 days.
4. Submits proof of work:
   - GitHub repository/commit
   - LinkedIn post
5. Each completed day contributes to the student's 60-day journey.
6. The goal is consistency, public proof of work, and building a visible portfolio.

The product should make students feel:

"I am building something every day."

"I don't want to break my streak."

"I can literally see myself becoming a better developer."

The current dashboard uses a conventional grid of 60 day blocks.

REMOVE that conventional visual approach.

Instead, make the student's profile photo the actual visual representation of their 60-day progress.

==================================================
1. REDESIGN THE LANDING / LAUNCH PAGE
==================================================

Transform the existing landing page into a highly interactive launch experience.

Take inspiration from the creativity, motion, WebGL feel, typography, transitions and immersive storytelling of the Three.js website.

IMPORTANT:
This is INSPIRATION, NOT A CLONE.

Do not copy the Three.js website's exact design, assets, branding, or layout.

Create an original ABTalks visual identity.

The launch page should feel like entering a creative developer experience.

--------------------------------------------------
HERO / LAUNCH ANIMATION
--------------------------------------------------

Create a full-screen hero experience.

The first viewport should immediately communicate:

ABTalks

60 DAYS.
60 BUILDS.
ONE DEVELOPER.

Use subtle WebGL / Three.js-style motion.

If Three.js is appropriate, use it.

If the existing project is dependency-free, it is acceptable to add Three.js only if it materially improves the experience.

The animation should be performant and mobile-friendly.

Do NOT create an unnecessarily heavy 3D scene.

Possible visual direction:

- floating geometric blocks
- small particles
- glowing nodes
- coding/build fragments
- subtle grid
- moving light
- abstract developer-related objects
- floating GitHub/LinkedIn proof elements
- animated 60-day progression
- subtle cursor interaction
- depth/parallax

The animation should respond subtly to mouse movement on desktop and touch movement on mobile where practical.

The overall feeling should be:

"Something is being built."

--------------------------------------------------
LEOPARD / BEGIN BUILDING EXPERIENCE
--------------------------------------------------

The launch page must have a prominent:

"BEGIN BUILDING"

button.

Take inspiration from the interaction style of the Three.js website where a visually interesting animal/3D element accompanies the entry experience.

For ABTalks, create an ORIGINAL student-friendly leopard interaction.

Do not copy any Three.js asset.

The leopard can be represented using:

- stylized 3D/WebGL geometry
- silhouette
- particles
- abstract mesh
- illustrated SVG
- CSS/Canvas treatment

Choose the approach that gives the best performance.

The leopard should feel energetic and friendly rather than aggressive.

Interaction idea:

Before clicking:

"BEGIN BUILDING"

The leopard subtly moves / looks toward the user.

When the user hovers:

- leopard reacts
- particles move
- button gains energy
- background subtly responds

When the user clicks:

- leopard moves across / through the screen
- the screen transitions
- the ABTalks information experience begins

Make the transition cinematic but short.

Do NOT make the user wait through a long animation.

Respect prefers-reduced-motion.

==================================================
2. AFTER BEGIN BUILDING — ABTALKS INTRO EXPERIENCE
==================================================

After the launch interaction, show a clean storytelling section explaining ABTalks.

The user should understand the product within a few seconds.

Create a visual sequence explaining:

STEP 01
Choose your track

STEP 02
Build something every day

STEP 03
Commit your work to GitHub

STEP 04
Share your work on LinkedIn

STEP 05
Complete all 60 days

STEP 06
Build a public developer identity

Use animated transitions between these sections.

Do NOT make this feel like a boring list.

Use scroll-driven or viewport-triggered animations.

For example:

A central "developer journey" object can progressively evolve as the user scrolls.

The number:

01 → 02 → 03 → 04 → 05 → 06

can animate.

The visual can progressively become more complete.

Use subtle motion, not excessive animation.

==================================================
3. WHY ABTALKS / 60-DAY STORY
==================================================

Create a strong section explaining why the challenge exists.

Suggested messaging:

"Most students learn in private."

"ABTalks makes your learning visible."

Then visually show:

BUILD
↓
COMMIT
↓
SHARE
↓
REPEAT
↓
BECOME VISIBLE

Use animated connecting lines/nodes.

Also communicate:

60 days
60 builds
60 pieces of proof

Make the number 60 visually important throughout the experience.

==================================================
4. REGISTRATION / ONBOARDING FLOW
==================================================

After the user understands ABTalks, they should be able to register.

Create a polished registration/onboarding experience.

Do NOT immediately throw the user into the dashboard.

The flow should be:

Landing
↓
Begin Building
↓
Understand ABTalks
↓
Register
↓
Create profile
↓
Dashboard

Registration should ask for:

- Full name
- Email
- Password
- Profile photo
- College
- Coding track

Possible tracks:

Frontend
Backend
Full Stack
AI/ML
Data Science
Android
iOS
UI/UX
Other

Keep the registration UI minimal.

Do not create a giant form.

Use progressive onboarding if appropriate.

After registration, create the student's profile.

Since this is currently a frontend/localStorage project, store the profile locally.

Do NOT claim that this is a real production authentication system.

Structure the code so a real backend/auth system could be connected later.

==================================================
5. PROFILE PHOTO IS NOW THE CORE OF THE DASHBOARD
==================================================

THIS IS THE MOST IMPORTANT CHANGE.

Remove the current conventional 60-day rectangular progress grid from the main dashboard.

Instead:

THE STUDENT'S PROFILE PHOTO BECOMES A 60-PIECE PUZZLE.

Example:

A student uploads:

[ PROFILE PHOTO ]

The dashboard displays that photo as a large puzzle.

The photo is divided into 60 pieces/blocks.

Initially, the image is mostly hidden.

As the student completes days, the photo gets revealed.

Day 1 = approximately 1/60 revealed

Day 2 = approximately 2/60 revealed

...

Day 30 = approximately 50% revealed

Day 60 = 100% revealed

The student should literally watch their own face become clearer as they progress.

This should become the emotional centerpiece of the product.

--------------------------------------------------
PUZZLE DESIGN
--------------------------------------------------

Do NOT simply put 60 squares over an image.

Make the puzzle visually beautiful.

Use irregular or slightly varied puzzle pieces if practical.

However, prioritize performance and implementation reliability.

Possible implementation:

- CSS grid with 60 tiles
- Canvas
- SVG clipping paths
- CSS masks
- WebGL if appropriate

Choose the most robust implementation.

Each puzzle piece should contain a corresponding portion of the user's profile photo.

Unrevealed pieces can show:

- dark/neutral surface
- ABTalks pattern
- subtle noise
- tiny day number
- faint grid
- lock icon

Revealed pieces show the actual image.

The unrevealed portions should still look intentional and beautiful.

--------------------------------------------------
PUZZLE REVEAL ANIMATION
--------------------------------------------------

When a student completes a challenge day:

The corresponding puzzle piece should animate into its revealed state.

Example animation:

1. Tile pulses.
2. Tile slightly lifts.
3. Tile rotates or flips subtly.
4. Hidden surface disappears.
5. Photo portion appears.
6. A tiny particle/glow effect occurs.
7. Overall progress updates.

Do NOT use a generic loading-bar animation.

The reveal should feel like:

"Another part of me has been built."

Add a small confirmation:

DAY 12 COMPLETE
+1 PIECE REVEALED

Then the dashboard updates.

--------------------------------------------------
SUBMISSION LOGIC
--------------------------------------------------

The existing project already supports GitHub and LinkedIn submissions.

Preserve this.

A day should only count as completed when the required proof is submitted according to the existing challenge logic.

For example:

GitHub submitted + LinkedIn submitted
→ day completed
→ puzzle piece revealed
→ progress increases
→ streak updates

If only one is submitted:

Show:

"1 of 2 proofs submitted"

Do NOT reveal the full day's puzzle piece yet.

When both are complete:

Trigger the puzzle reveal.

This should work with localStorage.

==================================================
6. DYNAMIC PROGRESS SYSTEM
==================================================

Replace the current boring:

11 / 60
18%

progress presentation.

Create a more creative progress system.

The puzzle itself should communicate progress.

Above/below the puzzle show:

DAY 11 OF 60

18% BUILT

11 PIECES REVEALED

But animate these values.

For example:

When moving from Day 11 → Day 12:

11
12

animate upward.

18%
20%

animate smoothly.

The progress ring/indicator should also move.

--------------------------------------------------
CREATIVE PROGRESS VISUAL
--------------------------------------------------

Consider adding a subtle circular progress ring around the student's profile image.

But do NOT let it overpower the puzzle.

The image itself is the main progress indicator.

Potential structure:

        DAY 12 / 60

      [ PUZZLE PHOTO ]

       20% BUILT

      12 / 60 PIECES

"Every commit reveals another piece."

==================================================
7. DASHBOARD SHOULD FEEL ALIVE
==================================================

The dashboard should not feel static.

Add subtle motion.

Examples:

- puzzle pieces gently animate on hover
- progress number counts up
- background particles move subtly
- cards enter with staggered animation
- streak flame has a subtle pulse
- current day card has a breathing animation
- completed proof badges animate in
- achievement cards reveal themselves
- progress changes trigger micro-interactions

Keep animations tasteful.

The dashboard should feel premium.

Do NOT make every element move simultaneously.

==================================================
8. DASHBOARD INFORMATION ARCHITECTURE
==================================================

Create a better dashboard hierarchy.

Suggested structure:

--------------------------------------------------
HEADER
--------------------------------------------------

ABTalks logo

Student avatar
Student name
Track

Notification / menu

--------------------------------------------------
WELCOME
--------------------------------------------------

"Good evening, Aarav."

"Day 12 of your 60-day journey."

Small motivational message that changes based on progress.

--------------------------------------------------
MAIN PUZZLE
--------------------------------------------------

DAY 12 / 60

[ LARGE PROFILE PUZZLE ]

20% BUILT

12 pieces revealed

"Keep building. Your picture is coming together."

--------------------------------------------------
TODAY'S BUILD
--------------------------------------------------

Today's challenge

Challenge title

Short description

Estimated time

[ Start today's build ]

--------------------------------------------------
TODAY'S PROOF
--------------------------------------------------

GitHub
✓ Submitted

LinkedIn
✓ Submitted

OR

GitHub
✓ Submitted

LinkedIn
○ Pending

[ Complete today's proof ]

--------------------------------------------------
STREAK
--------------------------------------------------

🔥 12-day streak

"12 days without breaking the chain."

--------------------------------------------------
ACHIEVEMENTS
--------------------------------------------------

First Build
7-Day Streak
10 Builds
25% Complete
Halfway There
60-Day Finisher

Use visually interesting achievement cards.

--------------------------------------------------
JOURNEY
--------------------------------------------------

Instead of the old 60-square grid, create a secondary journey timeline.

Show milestones:

DAY 1
DAY 10
DAY 20
DAY 30
DAY 40
DAY 50
DAY 60

This is NOT the main progress visual.

The puzzle remains the main visual representation.

==================================================
9. PUZZLE INTERACTION
==================================================

When the user hovers/taps a puzzle piece:

Show:

DAY 12
GitHub ✓
LinkedIn ✓
Completed

If a day is incomplete:

DAY 13
Locked

or:

DAY 13
Awaiting proof

On desktop use hover.

On mobile use tap.

Do not make interactions inaccessible.

==================================================
10. RESPONSIVE MOBILE DESIGN
==================================================

Mobile is extremely important.

The current users are college students who frequently use the product on phones.

Design mobile first.

The puzzle should occupy a major portion of the screen but should not become enormous.

Suggested mobile order:

Header
↓
Day progress
↓
Puzzle
↓
Today's challenge
↓
Today's proof
↓
Streak
↓
Achievements
↓
Journey

Use bottom navigation if useful.

Make sure:

- no horizontal scrolling
- buttons are thumb-friendly
- text remains readable
- animations do not cause layout shifts
- puzzle scales correctly
- image remains crisp
- cards do not become overly tall

==================================================
11. DESKTOP DESIGN
==================================================

On desktop, create a more editorial / premium layout.

Possible layout:

LEFT:
Navigation / profile

CENTER:
Large puzzle + today's challenge

RIGHT:
Progress / streak / proof / achievements

Use whitespace.

Do not simply stretch the mobile cards across the screen.

The dashboard should feel like a real product.

==================================================
12. VISUAL LANGUAGE
==================================================

Maintain ABTalks' existing orange/black/white visual identity.

Use:

- strong typography
- clean cards
- subtle borders
- soft shadows
- orange accent
- dark text
- off-white background

But elevate it.

The interface should feel like:

modern developer platform
+
creative portfolio
+
gamified learning product

Avoid:

- generic SaaS dashboard
- excessive gradients
- childish gamification
- excessive glassmorphism
- random animations
- huge amounts of text
- template-looking cards

==================================================
13. MOTION SYSTEM
==================================================

Create a consistent motion language.

Use:

- 150–250ms micro interactions
- 400–700ms larger transitions
- staggered reveals
- spring-like easing where appropriate
- subtle scale transforms
- opacity + translate transitions

Respect:

prefers-reduced-motion: reduce

When reduced motion is enabled:

- disable WebGL-heavy movement
- disable large transitions
- keep the interface completely usable

==================================================
14. PERFORMANCE
==================================================

Do NOT sacrifice performance for visual effects.

Important:

- lazy load large profile images
- compress/resize images where appropriate
- avoid huge canvas textures
- avoid unnecessary re-renders
- clean up animation loops
- use requestAnimationFrame responsibly
- avoid animation on expensive DOM properties
- prefer transform/opacity
- ensure mobile performance

If using Three.js:

- use a lightweight scene
- dispose geometries/materials/textures
- stop animation when the section is not visible
- use IntersectionObserver where appropriate
- reduce particle count on mobile

==================================================
15. DATA / LOCALSTORAGE
==================================================

Extend the existing localStorage architecture.

Create a clear student state such as:

student:
{
  name,
  email,
  college,
  track,
  profileImage,
  joinedAt
}

challenge:
{
  currentDay,
  completedDays,
  streak,
  submissions
}

Each completed day should correspond to one puzzle piece.

Example:

completedDays: [1,2,3,4,5,6,7,8,9,10,11]

Then puzzle automatically reveals 11 pieces.

Do NOT hardcode "11/60" into the UI.

The entire dashboard should derive its state dynamically.

==================================================
16. NEW USER EXPERIENCE
==================================================

If no student account exists:

Show the landing/onboarding flow.

Do not show a fake completed dashboard.

After registration:

Create a new student state.

Initial dashboard:

DAY 1 / 60

0 or 1 piece depending on the challenge completion model.

Puzzle should show the student's uploaded profile image underneath the unrevealed pieces.

The student should understand immediately:

"This is my 60-day journey."

==================================================
17. DEMO / DEVELOPMENT EXPERIENCE
==================================================

Because this is currently a frontend prototype, create a development/demo mechanism so the puzzle can be tested.

For example:

- complete day
- reset progress
- change profile image
- simulate submission

But do NOT expose ugly developer controls in the normal production UI.

A query parameter or development-only utility is acceptable.

For example:

/dashboard/?demo=day12

could simulate 12 completed days.

Make sure the normal user experience remains clean.

==================================================
18. EXISTING DAY PAGE
==================================================

Do not neglect /day/12/.

Update the challenge page so it visually belongs to the new product.

When the student submits:

GitHub + LinkedIn

show a strong completion state.

Example:

DAY 12 COMPLETE

+1 PUZZLE PIECE UNLOCKED

[ View your progress ]

Clicking this should return to the dashboard and visibly show the newly revealed piece.

The transition should feel connected to the dashboard.

==================================================
19. SUCCESS MOMENT
==================================================

When a student completes a day, create a satisfying but tasteful success animation.

Example:

"DAY 12 COMPLETE"

The newly unlocked puzzle piece flies/animates toward the dashboard puzzle.

Then:

+1 PIECE

20% BUILT

The effect should make the user want to come back tomorrow.

Do not make it childish or overly gamified.

==================================================
20. 60-DAY COMPLETION
==================================================

At Day 60:

The profile photo should be completely revealed.

Create a special completion state:

60 DAYS COMPLETE

YOUR BUILDING JOURNEY IS COMPLETE.

[ PROFILE PUZZLE — FULLY REVEALED ]

"60 builds. 60 proofs. One developer identity."

Add a celebratory but premium animation.

Do NOT use excessive confetti.

The student should be able to share/export their completed 60-day achievement later.

Structure the UI so a share feature can be added easily.

==================================================
21. ACCESSIBILITY
==================================================

Ensure:

- keyboard navigation
- semantic HTML
- proper buttons
- aria labels where needed
- visible focus states
- sufficient contrast
- alt text for profile images
- reduced-motion support
- no interaction that depends exclusively on hover

==================================================
22. CODE QUALITY
==================================================

Before editing:

Inspect:

index.html
dashboard/index.html
day/12/index.html
styles.css
script.js
dashboard.js
day.js
data.js

Understand how the existing state flows.

Then refactor where necessary.

Do not create unnecessary duplicate files.

Keep JavaScript modular and readable.

Use CSS variables for design tokens.

Avoid massive inline styles.

Avoid hardcoded repeated markup when data-driven rendering makes more sense.

==================================================
23. IMPORTANT DESIGN DECISION
==================================================

The profile puzzle must become the visual metaphor of ABTalks.

The core idea is:

"You are not just completing 60 boxes."

"You are revealing yourself."

Every day of consistency reveals another part of the student's identity.

The final dashboard should make the student feel emotionally connected to the progress.

The product story is:

START
↓
UNKNOWN / HIDDEN
↓
BUILD
↓
PROVE
↓
REVEAL
↓
BECOME VISIBLE
↓
60 DAYS
↓
FULLY REVEALED

Use this idea throughout the UX.

==================================================
24. FINAL IMPLEMENTATION REQUIREMENT
==================================================

Do not stop after creating a visual mockup.

Actually implement the functionality.

The final project must:

1. Have the new animated landing page.
2. Have the Begin Building interaction.
3. Have the ABTalks introduction/storytelling flow.
4. Have registration/onboarding.
5. Save student profile information locally.
6. Allow profile photo upload.
7. Use the profile photo as the 60-piece puzzle.
8. Dynamically reveal pieces based on completed days.
9. Connect GitHub + LinkedIn submissions to day completion.
10. Animate puzzle reveal after successful submission.
11. Dynamically calculate progress.
12. Have a redesigned responsive dashboard.
13. Work on mobile.
14. Work on desktop.
15. Preserve existing routes.
16. Preserve existing useful functionality.
17. Respect reduced motion.
18. Avoid fake static progress values.
19. Avoid breaking existing localStorage submission logic.
20. Be visually polished enough to present as a serious product design case study.

==================================================
25. BEFORE YOU FINISH
==================================================

After implementation:

- inspect every changed file
- check for broken relative paths
- check all routes
- check localStorage state
- test registration
- test profile image upload
- test completing a day
- test GitHub submission
- test LinkedIn submission
- test puzzle reveal
- test progress calculation
- test mobile layout
- test desktop layout
- test a fresh user with no data
- test a partially completed user
- test Day 60
- test reduced-motion behavior

Fix all console errors.

Do not leave TODO placeholders.

Do not replace functionality with static mockups.

The final result should feel like a real, polished ABTalks product.

Most importantly:

MAKE THE PUZZLE + PROFILE PHOTO THE HERO OF THE DASHBOARD.

The student should immediately understand:

"Every day I build, another piece of me is revealed."






//updating the existing one with claude and cursor

I am building the ABTalks 60-Day Coding Challenge website.

I will provide you with my existing website/project and the exact visual template/design that I want to use.

Your job is to analyze BOTH the existing ABTalks project and the provided template carefully and then produce ONE FINAL implementation prompt for Cursor AI.

The template I provide is the SOURCE OF TRUTH for the visual design.

Do not redesign it into something different.

Do not invent a completely new UI.

The final ABTalks website should retain the template’s:

* overall layout
* visual hierarchy
* spacing
* typography style
* navigation structure
* section organization
* card/grid structure
* proportions
* design language
* visual density
* transitions
* overall aesthetic

However, replace the template’s content and functionality with the ABTalks requirements below.

⸻

ABTALKS PRODUCT

ABTalks is a 60-day coding challenge platform for college students.

Students participate in a 60-day coding journey.

Every day they build and submit proof of work through:

1. GitHub
2. LinkedIn
3. Live project URL

The platform tracks:

* current challenge day
* completed days
* current streak
* submission consistency
* projects
* daily tasks
* overall progress toward Day 60

The website should make the student’s consistency feel rewarding and visually meaningful.

⸻

PRIMARY DESIGN DIRECTION

Use the provided template as the exact visual foundation.

Add modern interactive motion inspired by the type of experience seen on the Three.js website:

* smooth motion
* depth
* subtle 3D
* particles
* mouse-responsive movement
* scroll-based animation
* parallax
* smooth transitions
* interactive elements
* micro-interactions

IMPORTANT:

Take inspiration from the interaction quality and motion principles of Three.js.

DO NOT copy:

* Three.js branding
* exact website layout
* exact graphics
* exact animations
* exact components
* exact visual assets

The result must remain an original ABTalks implementation based on my supplied template.

⸻

LANDING PAGE

Create the ABTalks landing/launch experience using the supplied template.

It must clearly communicate the 60-Day Coding Challenge.

Include:

* ABTalks introduction
* explanation of the 60-day challenge
* daily coding consistency
* GitHub submissions
* LinkedIn submissions
* live project submissions
* public proof of work
* learning streak
* project building
* progress toward Day 60
* motivation for college students
* recruiter visibility / portfolio-building value

Do not turn this into a boring information page.

Use the template’s visual structure while making the content interactive.

The landing page should have:

* smooth entrance animations
* subtle 3D depth
* particles where appropriate
* mouse-responsive elements
* scroll-based movement
* animated progress/journey elements
* interactive buttons
* smooth section transitions

The animation should communicate:

“Every day you build, you move forward.”

⸻

DASHBOARD

Preserve the existing dashboard functionality.

Improve its visual experience using the provided template.

Do not replace the dashboard with unrelated designs.

The dashboard should visually communicate:

* current day
* streak
* submitted days
* today’s progress
* Day 60 progress
* GitHub status
* LinkedIn status
* Live URL status

Do not rely entirely on boring rectangular statistic cards.

Use the template’s existing visual language and add creative animation.

When the student enters the dashboard:

* progress can animate into view
* completed days can reveal themselves
* streak can visually activate
* today’s progress can update
* important milestones can receive subtle motion

Do NOT create a long loading sequence.

The dashboard must remain fast and usable.

⸻

STUDENT PROFILE / LEARNING JOURNEY

Create a student profile/learning journey experience using the template’s design language.

The profile should display:

* student information
* current streak
* submitted days
* current challenge day
* Day 60 progress
* GitHub activity
* LinkedIn activity
* live projects
* learning journey

The profile should feel like a representation of the student’s journey rather than just a collection of profile cards.

⸻

OPTIONAL LEARNING TREE

I originally wanted a tree-based progress visualization where the student’s tree grows when they submit:

GitHub
LinkedIn
Live URL

and where the tree grows according to the student’s streak.

However, DO NOT implement a fake/static tree.

ONLY implement the tree if it can genuinely be connected to the application’s actual student progress/submission data and dynamically animate.

For example:

GitHub submission
→ tree/code-related growth

LinkedIn submission
→ visual/social growth

Live URL submission
→ project/output growth

Increasing streak
→ progressively larger tree

The tree should visibly grow through animation when new work is submitted.

IMPORTANT:

If the existing application’s data architecture does not support a genuinely dynamic tree, DO NOT add a fake tree progress bar or static tree visualization.

A static/non-functional tree is worse than having no tree.

In that case, completely remove the tree progress concept and use another dynamic visualization that can actually be connected to real data.

⸻

STREAK VISUALIZATION

The streak must feel creative and dynamic.

Avoid simply showing:

“24 Day Streak”

inside a normal box.

Use the template’s visual system to create an interactive representation of:

* current streak
* submitted days
* current challenge day
* consistency
* Day 60 progress

Possible techniques include:

* animated timeline
* glowing journey
* circular progress
* milestone system
* particles
* animated counters
* progressive reveal

Choose only techniques that fit the supplied template.

⸻

DAILY TASKS

Create a daily-task experience using the exact visual language of the supplied template.

The user should see:

* today’s challenge/day
* task description
* GitHub submission
* LinkedIn submission
* Live URL submission
* completion state
* today’s progress
* relationship to the 60-day challenge

Tasks must have clear states:

* incomplete
* in progress
* completed

When the student completes a submission:

GitHub
→ visual feedback
→ progress updates

LinkedIn
→ visual feedback
→ progress updates

Live URL
→ visual feedback
→ progress updates

When all are complete:

→ today’s progress reaches completion
→ overall challenge progress updates

⸻

CUSTOM CURSOR

Create an original interactive cursor on desktop.

It should have:

* smooth movement
* subtle trailing motion
* hover reactions
* interactive states
* smooth transitions

For example:

Normal area:
minimal cursor

Interactive button:
cursor changes/expands

Interactive animation:
cursor reacts

Do not let the cursor interfere with usability.

On mobile/touch devices, disable the custom cursor and preserve normal touch interaction.

⸻

RESPONSIVENESS

The website must work correctly on:

* desktop
* laptop
* tablet
* mobile

On mobile:

* reduce heavy effects
* reduce particle count
* remove hover-only interactions
* simplify 3D effects
* preserve the visual identity
* prevent horizontal scrolling

⸻

PERFORMANCE

Animations must be optimized.

Use the existing project architecture wherever possible.

If Three.js is needed, integrate it properly.

If an animation library is already present, reuse it.

Do not add unnecessary dependencies.

Prevent:

* memory leaks
* duplicate animation loops
* excessive particle counts
* unnecessary re-renders
* broken canvas resizing

Dispose of Three.js resources properly when components unmount.

⸻

EXISTING PROJECT SAFETY

This is critical.

Cursor must first inspect the existing project.

Do NOT:

* rebuild the entire project unnecessarily
* remove working functionality
* break authentication
* break routing
* replace real data with fake data
* remove existing dashboard functionality
* change unrelated components
* introduce unrelated features
* change the application’s core logic without necessity

The goal is to improve and extend the existing application.

⸻

FINAL CURSOR PROMPT

After analyzing my supplied template and existing ABTalks project, produce ONE final Cursor AI prompt.

That Cursor prompt must be:

* implementation-ready
* detailed
* unambiguous
* based specifically on my supplied template
* based specifically on the existing project architecture
* explicit about what should change
* explicit about what must not change

Cursor should not have to invent major requirements.

The prompt must instruct Cursor to:

1. inspect the existing project first
2. inspect the supplied template
3. identify the existing architecture
4. preserve existing functionality
5. reproduce the supplied template’s visual language
6. integrate ABTalks content and functionality
7. implement the landing page
8. improve the dashboard
9. implement the student profile
10. implement the daily-task experience
11. implement the custom cursor
12. implement motion/3D effects
13. implement the learning tree ONLY if it can be genuinely dynamic
14. otherwise remove the tree progress concept completely
15. connect animations to real application data
16. make everything responsive
17. optimize performance
18. test the application
19. fix errors introduced by implementation
20. ensure existing routes and functionality continue working

Do not generate multiple Cursor prompts.

Do not provide suggestions outside these requirements.

Do not add unrelated features.

Return ONLY ONE final Cursor implementation prompt.

You are modifying my existing ABTalks website.

I have provided:

1. The existing ABTalks project/codebase.
2. The visual template/design that I want the final website to follow.

Your job is to modify the EXISTING PROJECT and make it match the supplied template while integrating the ABTalks functionality and interactive motion described below.

IMPORTANT:

The supplied template is the SOURCE OF TRUTH for the visual design.

Do not replace it with your own unrelated design.

Preserve its:

* layout
* visual hierarchy
* spacing
* typography style
* navigation
* section structure
* proportions
* card/grid system
* design language
* overall aesthetic

Adapt the template specifically for ABTalks.

Do not copy the Three.js website. Only take inspiration from its quality of motion and interaction.

⸻

ABTALKS

ABTalks is a 60-day coding challenge platform for college students.

Students build and submit proof of work every day through:

* GitHub
* LinkedIn
* Live project URL

The platform tracks:

* current challenge day
* submitted days
* streak
* daily tasks
* GitHub status
* LinkedIn status
* live URL status
* overall progress toward Day 60

The final experience should make the student feel that their consistency is visibly moving them forward.

⸻

STEP 1 — INSPECT BEFORE MODIFYING

Before changing code:

* inspect the complete project
* understand the framework
* understand routing
* inspect existing components
* inspect existing pages
* inspect state management
* inspect data flow
* inspect existing dashboard functionality
* inspect styling system
* inspect dependencies
* inspect the supplied template

Do not start by rebuilding the application.

Reuse existing architecture wherever possible.

⸻

STEP 2 — LANDING PAGE

Build the ABTalks landing/launch page using the supplied template.

It must communicate the 60-Day Coding Challenge.

Include:

* ABTalks introduction
* 60-day challenge explanation
* daily coding consistency
* GitHub proof of work
* LinkedIn proof of work
* live project submission
* public learning streak
* project building
* Day 1 → Day 60 journey
* recruiter visibility / portfolio-building value

Use the template’s visual hierarchy rather than creating an unrelated layout.

Add polished motion:

* smooth entrance animations
* subtle 3D depth
* particles where appropriate
* mouse-responsive movement
* parallax
* scroll-based movement
* hover interactions
* smooth transitions

The page should feel alive without becoming distracting.

⸻

STEP 3 — DASHBOARD

Preserve the existing dashboard functionality and routing.

Improve its visual presentation using the supplied template.

Display:

* current challenge day
* current streak
* submitted days
* today’s progress
* Day 60 progress
* GitHub status
* LinkedIn status
* Live URL status

Do not rely exclusively on static rectangular statistic boxes.

Use creative dynamic visualizations that fit the template.

When the user enters the dashboard:

* progress should reveal smoothly
* completed days can animate into view
* streak can activate visually
* today’s progress should update
* important milestones can receive subtle motion

Do not create a long loading animation.

⸻

STEP 4 — STUDENT PROFILE

Create/improve the student profile/learning journey page.

It should display:

* student information
* current streak
* submitted days
* current challenge day
* Day 60 progress
* GitHub activity
* LinkedIn activity
* live projects
* learning journey

Use the supplied template’s design language.

The profile should feel like an interactive representation of the student’s progress.

⸻

STEP 5 — LEARNING TREE

The original concept is a digital tree representing the student’s coding journey.

The tree should grow when the student submits:

GitHub
LinkedIn
Live URL

The tree should also reflect streak progression.

However, this has a STRICT requirement:

DO NOT create a fake/static tree progress bar.

Only implement the tree if it can genuinely be connected to the application’s real data/state.

If dynamic data is available, implement:

* initial seed/small tree
* progressive growth
* trunk/branch development
* leaves/environment changes
* submission-triggered animation
* streak-based growth
* smooth transition between growth states

Example mapping:

GitHub submission → coding/branch growth

LinkedIn submission → leaves/social growth

Live URL submission → project/output growth

Increasing streak → overall tree growth

When a submission is completed, the tree should visibly animate.

BUT:

If the existing architecture/data does not allow this tree to be genuinely dynamic and connected to real student progress, REMOVE THE TREE CONCEPT ENTIRELY.

Do not leave behind:

* fake tree progress
* static tree
* decorative tree pretending to represent real progress
* non-functional tree progress bar

In that case, replace it with a dynamic visualization that can actually use the available data.

⸻

STEP 6 — STREAK

Make the streak visually creative.

Do not simply display:

“24 Day Streak”

in a standard box.

Create an interactive representation of:

* current streak
* submitted days
* current day
* Day 60 progress
* consistency

Use animations such as:

* progressive timeline
* milestones
* animated counters
* glowing journey
* circular/organic progress
* particles
* subtle depth

Only use effects that fit the supplied template.

⸻

STEP 7 — DAILY TASK PAGE

Create or redesign the daily-task page using the supplied template.

Display:

* today’s day
* today’s challenge
* task description
* GitHub submission
* LinkedIn submission
* Live URL submission
* completion state
* today’s progress
* relationship to Day 60

Task states must clearly communicate:

* incomplete
* in progress
* completed

When GitHub is submitted:

→ show visual feedback
→ update today’s progress

When LinkedIn is submitted:

→ show visual feedback
→ update today’s progress

When Live URL is submitted:

→ show visual feedback
→ update today’s progress

When all three are complete:

→ today’s challenge becomes complete
→ overall 60-day progress updates

Use animation to communicate state changes.

⸻

STEP 8 — CUSTOM CURSOR

Create an original ABTalks custom cursor for desktop.

It should have:

* smooth movement
* subtle trailing effect
* hover reactions
* interactive states
* smooth interpolation

Normal:
minimal cursor

Interactive button:
cursor changes/expands

Interactive animation:
cursor responds

Do not interfere with:

* clicking
* scrolling
* text selection
* normal interaction

Disable the custom cursor on mobile/touch devices.

⸻

STEP 9 — MOTION SYSTEM

Create a consistent ABTalks motion language across:

Landing
Dashboard
Profile
Learning Journey
Daily Tasks

Use:

* smooth transitions
* subtle parallax
* mouse-responsive movement
* scroll animation
* hover effects
* depth
* particles where useful
* 3D effects where useful
* micro-interactions

Every major animation should have a purpose.

Example:

GitHub submission
→ feedback
→ progress updates
→ streak updates
→ tree grows IF dynamic tree is actually implemented

LinkedIn submission
→ feedback
→ progress updates

Live URL submission
→ feedback
→ progress updates

All daily submissions complete
→ daily journey completes
→ Day 60 progress updates

⸻

STEP 10 — RESPONSIVE DESIGN

Everything must work on:

* desktop
* laptop
* tablet
* mobile

On mobile:

* reduce particle count
* simplify 3D effects
* remove hover-only interactions
* disable custom cursor
* preserve the visual identity
* prevent horizontal scrolling
* maintain usable touch targets

⸻

STEP 11 — PERFORMANCE

Keep the website fast.

Use:

* requestAnimationFrame where appropriate
* efficient rendering
* reasonable particle counts
* proper cleanup
* proper Three.js resource disposal
* responsive canvas sizing
* reduced effects on mobile/low-power devices

Avoid:

* duplicate animation loops
* memory leaks
* excessive re-renders
* unnecessarily heavy 3D scenes
* animations that block interaction

Do not add unnecessary dependencies.

Reuse existing animation libraries if already installed.

Use Three.js only where it provides real value.

⸻

STEP 12 — DO NOT BREAK EXISTING FUNCTIONALITY

This is mandatory.

Do NOT:

* remove existing functionality
* break authentication
* break routes
* break forms
* replace real data with fake data
* remove existing dashboard functionality
* rewrite the application unnecessarily
* modify unrelated features
* introduce unrelated pages/features

Preserve the existing application logic.

Integrate the new visual experience into the existing architecture.

⸻

STEP 13 — FINAL QUALITY CHECK

After implementation:

1. Run/build the application.
2. Check for compilation errors.
3. Check for runtime errors.
4. Check all existing routes.
5. Check existing functionality.
6. Check landing page.
7. Check dashboard.
8. Check profile.
9. Check daily tasks.
10. Check submission interactions.
11. Check animations.
12. Check custom cursor.
13. Check responsive behavior.
14. Check mobile behavior.
15. Check performance.
16. Fix any errors introduced by your changes.

Do not stop after creating the visual components.

The final result should be a cohesive, production-quality ABTalks website that follows the supplied template and uses motion/interaction to make the 60-day coding journey feel alive.

Most importantly:

Follow the supplied template.

Preserve existing functionality.

Do not invent unrelated features.

Do not create a fake tree.

Only use the learning tree if it is genuinely dynamic and connected to real student progress. Otherwise remove it completely.



//claude prompt 

You messed up the previous changes. FIRST restore the website to how it was BEFORE your last edge-case changes. Preserve the original theme, layout, components, styling, routes and Day 12 default experience.

Then make ONLY the changes below. Do not redesign anything else.

AUTH / LOGIN FLOW:

1. WITHOUT LOGIN
- The website should continue showing the current default/mock Day 12 interface exactly as before.
- Users can browse the landing page and see the dashboard/challenge UI.
- BUT they cannot actually use the program features.

2. WHEN A USER TRIES TO:
- Start the 60-day program
- Start/build today's challenge
- Open/use Progress
- Submit GitHub proof
- Submit LinkedIn proof
they must be prompted to LOGIN first.

3. LOGIN UI
Create a polished, visually impressive login modal/hoverbox or page that matches the EXISTING ABTalks theme.
It can be creative/"crazy" in presentation, but MUST remain consistent with the current orange + warm/white + minimal premium design.
Do NOT introduce a new theme.

This is only a MOCK login. No backend/authentication/database is needed.

After the user clicks Login:
- Treat them as logged in for the current session/local state.
- Immediately show them as a NEW participant starting Day 1.

4. AFTER LOGIN — DAY 1
This is critical:
- Override the current default Day 12 mock state ONLY for the logged-in user.
- Show Day 1 of 60.
- completedDays = 0
- currentStreak = 0
- first-day state = true
- Today's challenge should be the Day 1 challenge.
- Progress should start from 0.
- The user should be able to start the Day 1 challenge.
- GitHub/LinkedIn submission should now be enabled.

5. FIRST-DAY UX
Make the existing interface properly handle:
"Your journey starts today."
"Complete your first build to start your streak."
Use the existing design system. Do not create a completely new dashboard.

6. IMPORTANT
- Keep the existing Day 12 mock data as the DEFAULT when logged out.
- Do NOT delete the Day 12 data.
- Do NOT change the existing landing page unnecessarily.
- Do NOT change the overall theme.
- Do NOT add authentication/backend/database.
- Do NOT add unnecessary dependencies.
- Do NOT create unrelated pages/features.
- Keep the required routes /, /dashboard and /day/12 working.
- /day/12 must remain a valid submission route even if the logged-in user's displayed challenge is Day 1.

7. PROFILE / MISSED DAY EDGE CASES
Do NOT redesign these again unless absolutely necessary. Only make sure the existing first-day, missed-day and empty-profile states continue working correctly after this login flow.

Before editing, inspect the current code and understand how the existing mock state, dashboard, challenge and buttons work.

Make the SMALLEST set of changes necessary to implement exactly this behavior.

Finally:
- run the build/typecheck
- fix errors caused by your changes
- verify logged-out and logged-in states separately
- verify GitHub/LinkedIn are locked before login and usable after login.







I am continuing an existing ABTalks hackathon project from another Claude session.

I am attaching TWO ZIP files:

1. ORIGINAL ZIP = the untouched project before the previous changes.
2. LATEST ZIP = the current version after the previous Claude implemented the login/auth + Day 1 changes.

IMPORTANT:
- The LATEST ZIP is the version you must CONTINUE working on.
- Use the ORIGINAL ZIP only to compare/restore anything that may have been accidentally changed.
- DO NOT restart or rebuild the project.
- DO NOT redesign the UI.
- DO NOT change the existing theme, layout, typography, colors, spacing, components or visual identity.
- Preserve everything that already works.
- Make ONLY the remaining necessary changes listed below.

First inspect BOTH ZIPs and understand the differences before editing.

CURRENT INTENDED USER FLOW:

LOGGED OUT:
- Landing page works normally.
- Dashboard remains the ORIGINAL mock Day 12 experience.
- User can browse the interface.
- But actions that actually start/use the program require login.

LOGIN REQUIRED FOR:
- Start the 60-Day Challenge
- Start/open today's build
- Progress
- GitHub proof submission
- LinkedIn proof submission

When any of these actions is attempted while logged out:
→ open the existing login modal.
Do NOT redirect to a completely new login page unless the existing implementation already does so.

AFTER LOGIN:
- Treat the user as a new participant using mock/local auth only.
- Dashboard switches from Day 12 mock data to DAY 1.
- currentDay = 1
- completedDays = 0
- currentStreak = 0
- first-day state = true
- Show the Day 1 challenge.
- Progress starts from 0.
- GitHub/LinkedIn submission becomes usable.

CRITICAL:
The original Day 12 mock data MUST remain intact for the logged-out state.
Do NOT replace it with Day 1 globally.

REMAINING FIXES TO VERIFY/IMPLEMENT:

1. PROGRESS
The Progress navigation/action must require login.
Logged out → login modal.
Logged in → dashboard/progress.

2. GITHUB + LINKEDIN SUBMISSION
While logged out:
- GitHub/LinkedIn fields must NOT be editable.
- The submission area should clearly indicate that login is required.
- Clicking it should open the existing login modal.
- Do not allow URLs to be entered/submitted before login.

After login:
- Inputs become normally editable.
- Submission works using the existing mock/local implementation.

3. EMPTY PROFILE EDGE CASE
Properly support the existing profileReady=false state.
It should show a polished existing-theme empty state such as:
"Make your builder profile yours."
with a short explanation and "Complete profile" CTA.

Do NOT create authentication, backend, database, or an unnecessary new page.
A small modal/inline mock interaction is enough.

4. MISSED DAY EDGE CASE
Keep the existing missed-day functionality working.
It should remain empathetic and use the existing design.
Do not redesign the dashboard.

5. FIRST DAY EDGE CASE
Ensure the logged-in Day 1 experience correctly shows:
- Day 1 of 60
- 0 completed
- 0 streak
- encouraging first-day messaging
- Start Day 1 CTA

Do not create a new dashboard design. Modify the existing components only where necessary.

ROUTES:
These MUST remain:
/
/dashboard
/day/12

/day/12 must remain a valid required hackathon route.
Do not remove or rename it.

VERY IMPORTANT VISUAL RULE:
The existing UI is already designed.
DO NOT "improve" the design by changing layouts, colors, fonts, cards, navigation, spacing, or page structure.

If something already looks correct, LEAVE IT ALONE.

Use the existing components, styling and auth implementation wherever possible.
Do not add unnecessary dependencies.
Do not create duplicate architecture.

Before editing:
1. Inspect both ZIPs.
2. Identify exactly what the latest ZIP already implements.
3. Only implement missing/faulty behavior.
4. Preserve the latest working version.

After editing:
- run TypeScript/build checks
- fix errors
- verify logged-out vs logged-in behavior
- verify all required routes
- verify the login gates
- verify submission locking
- verify Day 1 after login
- verify the original Day 12 state remains when logged out.

DO NOT claim something is verified unless you actually tested it.

Most important: this is a surgical continuation of the existing project, NOT a redesign.