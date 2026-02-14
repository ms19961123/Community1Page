+const events = [
+  {
+    id: 1,
+    title: "Saturday Stroller Loop",
+    neighborhood: "Fairmount",
+    category: "Walks",
+    dateTime: "Sat, 9:30 AM",
+    ageRange: "0–4",
+    setting: "Outdoor",
+    distance: "1.8 mi",
+    trust: "Email verified",
+    capacity: 12,
+    spotsTaken: 8,
+    noDevices: true,
+    details:
+      "Easy pace stroller-friendly loop with coffee stop for grownups and bubbles for toddlers.",
+    privateNotes:
+      "Meet near the north side entrance sign. Look for a yellow tote with a sunflower patch.",
+  },
+  {
+    id: 2,
+    title: "Playground Circle Time",
+    neighborhood: "Queen Village",
+    category: "Playground",
+    dateTime: "Sun, 10:00 AM",
+    ageRange: "2–7",
+    setting: "Outdoor",
+    distance: "2.3 mi",
+    trust: "Phone verified",
+    capacity: 16,
+    spotsTaken: 9,
+    noDevices: true,
+    details: "Songs, snack break, then open play with rotating parent buddy check-ins.",
+    privateNotes: "Gather by the blue bench beside the public water fountain.",
+  },
+  {
+    id: 3,
+    title: "Library Craft Corner",
+    neighborhood: "Chestnut Hill",
+    category: "Crafts",
+    dateTime: "Wed, 4:00 PM",
+    ageRange: "5–10",
+    setting: "Indoor",
+    distance: "5.4 mi",
+    trust: "Email verified",
+    capacity: 10,
+    spotsTaken: 5,
+    noDevices: true,
+    details: "Scissor-safe collage stations and a short read-aloud from local librarians.",
+    privateNotes: "Use the family room entrance; host will share supply table number.",
+  },
+  {
+    id: 4,
+    title: "After-school Kickabout",
+    neighborhood: "Fishtown",
+    category: "Sports",
+    dateTime: "Thu, 5:15 PM",
+    ageRange: "6–11",
+    setting: "Outdoor",
+    distance: "3.1 mi",
+    trust: "Phone verified",
+    capacity: 14,
+    spotsTaken: 13,
+    noDevices: true,
+    details: "Low-pressure soccer games focused on teamwork and movement.",
+    privateNotes: "Meet at the open grass lot entrance next to the mural wall.",
+  },
+  {
+    id: 5,
+    title: "Nature Sketch Walk",
+    neighborhood: "Manayunk",
+    category: "Walks",
+    dateTime: "Sun, 8:45 AM",
+    ageRange: "4–10",
+    setting: "Outdoor",
+    distance: "6.2 mi",
+    trust: "Email verified",
+    capacity: 9,
+    spotsTaken: 3,
+    noDevices: true,
+    details: "Short riverside walk with mini sketch prompts and scavenger challenge.",
+    privateNotes: "Start near the trail map kiosk by the public bike racks.",
+  },
+  {
+    id: 6,
+    title: "Rainy Day Story Club",
+    neighborhood: "Mt. Airy",
+    category: "Library",
+    dateTime: "Tue, 3:45 PM",
+    ageRange: "3–8",
+    setting: "Indoor",
+    distance: "7.1 mi",
+    trust: "Email verified",
+    capacity: 12,
+    spotsTaken: 6,
+    noDevices: true,
+    details: "Story-led play prompts and quiet sensory bin corner.",
+    privateNotes: "Use front desk check-in and mention CommunityCircle story club.",
+  },
+  {
+    id: 7,
+    title: "Parent + Kid Beginner Yoga",
+    neighborhood: "Northern Liberties",
+    category: "Sports",
+    dateTime: "Sat, 11:00 AM",
+    ageRange: "4–9",
+    setting: "Indoor",
+    distance: "2.6 mi",
+    trust: "Phone verified",
+    capacity: 15,
+    spotsTaken: 12,
+    noDevices: true,
+    details: "Fun balance poses, breathing games, and calm-down toolkit for home.",
+    privateNotes: "Studio code and floor room posted after RSVP.",
+  },
+  {
+    id: 8,
+    title: "Little Builders Meetup",
+    neighborhood: "South Philly",
+    category: "Crafts",
+    dateTime: "Fri, 4:30 PM",
+    ageRange: "5–11",
+    setting: "Indoor",
+    distance: "2.0 mi",
+    trust: "Email verified",
+    capacity: 8,
+    spotsTaken: 8,
+    noDevices: true,
+    details: "Cardboard engineering builds with recycled supplies and teamwork stations.",
+    privateNotes: "Community room door opens 10 mins before start.",
+  },
+  {
+    id: 9,
+    title: "Park Picnic Mixer",
+    neighborhood: "Roxborough",
+    category: "Playground",
+    dateTime: "Sun, 12:30 PM",
+    ageRange: "All kids",
+    setting: "Outdoor",
+    distance: "7.8 mi",
+    trust: "Email verified",
+    capacity: 20,
+    spotsTaken: 14,
+    noDevices: true,
+    details: "Bring-your-own blanket picnic with cooperative games and snack swap.",
+    privateNotes: "Meet in the shaded field near the public restrooms.",
+  },
+  {
+    id: 10,
+    title: "Toddler Balance Bikes",
+    neighborhood: "East Passyunk",
+    category: "Sports",
+    dateTime: "Mon, 10:30 AM",
+    ageRange: "2–5",
+    setting: "Outdoor",
+    distance: "1.4 mi",
+    trust: "Phone verified",
+    capacity: 11,
+    spotsTaken: 7,
+    noDevices: true,
+    details: "Helmet check, confidence laps, and parent safety tips.",
+    privateNotes: "Start at the wide paved loop beside the community garden fence.",
+  },
+  {
+    id: 11,
+    title: "Calm Corner Coloring Hour",
+    neighborhood: "University City",
+    category: "Library",
+    dateTime: "Thu, 4:15 PM",
+    ageRange: "4–10",
+    setting: "Indoor",
+    distance: "3.8 mi",
+    trust: "Email verified",
+    capacity: 10,
+    spotsTaken: 4,
+    noDevices: true,
+    details: "Quiet coloring, puzzle table, and gentle social warmups for shy kids.",
+    privateNotes: "Family lounge on second floor; seating map shared after RSVP.",
+  },
+  {
+    id: 12,
+    title: "Sunset Family Walk",
+    neighborhood: "West Philly",
+    category: "Walks",
+    dateTime: "Fri, 6:00 PM",
+    ageRange: "3–12",
+    setting: "Outdoor",
+    distance: "4.4 mi",
+    trust: "Phone verified",
+    capacity: 18,
+    spotsTaken: 15,
+    noDevices: true,
+    details: "Gentle evening walk with sidewalk chalk stop and gratitude circle.",
+    privateNotes: "Start at the public plaza with the large map sign.",
+  },
+];
+
+const docs = {
+  guidelines: {
+    title: "Community Guidelines",
+    body: `
+      <p>CommunityCircle is a family-friendly, apolitical, anti-hate space.</p>
+      <ul>
+        <li>No hate speech, harassment, or intimidation.</li>
+        <li>No politics or partisan debate at events or in event descriptions.</li>
+        <li>No doxxing, stalking, or sharing private personal information.</li>
+        <li>No adult content or explicit material.</li>
+        <li>No repetitive spam, scams, or deceptive promotion.</li>
+      </ul>
+    `,
+  },
+  privacy: {
+    title: "Privacy",
+    body: `
+      <p>We use minimal profile details and avoid showing exact addresses before RSVP.</p>
+      <p>Event listings show public location labels and approximate distances only.</p>
+    `,
+  },
+  terms: {
+    title: "Terms",
+    body: `
+      <p>Use CommunityCircle respectfully and lawfully. Hosting requires email verification.</p>
+      <p>Phone verification unlocks additional hosting limits. ID verification is coming soon.</p>
+    `,
+  },
+};
+
+const grid = document.getElementById("events-grid");
+const eventModal = document.getElementById("event-modal");
+const modalContent = document.getElementById("modal-content");
+const modalClose = document.getElementById("modal-close");
+const toast = document.getElementById("toast");
+const menuToggle = document.getElementById("menu-toggle");
+const primaryNav = document.getElementById("primary-nav");
+
+let activeEventId = null;
+let rsvpState = {};
+let lastFocusedElement = null;
+
+function renderEvents() {
+  grid.innerHTML = events
+    .map(
+      (event) => `
+      <button class="event-card" data-event-id="${event.id}" aria-label="Open details for ${event.title}">
+        <div class="event-meta">
+          <span class="pill">${event.category}</span>
+          <span class="pill">${event.setting}</span>
+          <span class="pill">${event.distance}</span>
+        </div>
+        <h3>${event.title}</h3>
+        <p><strong>${event.neighborhood}</strong> • ${event.dateTime}</p>
+        <p>Ages ${event.ageRange}</p>
+        <div class="event-badges">
+          <span class="pill no-device">No-devices</span>
+          <span class="pill trust">${event.trust}</span>
+        </div>
+      </button>
+    `
+    )
+    .join("");
+}
+
+function showToast(message) {
+  toast.textContent = message;
+  toast.hidden = false;
+  setTimeout(() => {
+    toast.hidden = true;
+  }, 2200);
+}
+
+function buildModalView(event) {
+  const state = rsvpState[event.id] || { confirmed: false, checkedIn: false };
+  const remaining = Math.max(0, event.capacity - event.spotsTaken - (state.confirmed ? 1 : 0));
+  const full = !state.confirmed && event.spotsTaken >= event.capacity;
+
+  if (!state.confirmed) {
+    return `
+      <h2 id="modal-title">${event.title}</h2>
+      <p>${event.details}</p>
+      <p><strong>${event.neighborhood}</strong> • ${event.dateTime} • Ages ${event.ageRange}</p>
+      <p>Capacity: ${event.capacity} • Spots left now: ${Math.max(0, event.capacity - event.spotsTaken)}</p>
+      <p>${full ? "This meetup is currently full." : "Spots are still available."}</p>
+      <button class="btn btn-primary" data-rsvp="${event.id}" ${full ? "disabled" : ""}>Confirm attendance</button>
+      <p class="form-errors">Private location notes unlock after RSVP.</p>
+    `;
+  }
+
+  return `
+    <h2 id="modal-title">You're in: ${event.title}</h2>
+    <p><strong>RSVP confirmed.</strong> Thanks for joining this screen-light meetup.</p>
+    <div class="private-note">
+      <h3>Private location notes</h3>
+      <p>${event.privateNotes}</p>
+    </div>
+    <div class="hero-card" style="margin-top: 0.9rem;">
+      <h3>Offline nudge 🌿</h3>
+      <p>You're all set. Consider closing the app and enjoying face-to-face time.</p>
+      <button class="btn btn-secondary" data-checkin="${event.id}">${state.checkedIn ? "Checked in ✓" : "Check-in"}</button>
+    </div>
+    <p>Current capacity after your RSVP: ${remaining} spot(s) left.</p>
+  `;
+}
+
+function trapFocus(modal, e) {
+  if (e.key !== "Tab") return;
+  const focusable = modal.querySelectorAll(
+    'button:not([disabled]), [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
+  );
+  if (!focusable.length) return;
+  const first = focusable[0];
+  const last = focusable[focusable.length - 1];
+
+  if (e.shiftKey && document.activeElement === first) {
+    e.preventDefault();
+    last.focus();
+  }
+
+  if (!e.shiftKey && document.activeElement === last) {
+    e.preventDefault();
+    first.focus();
+  }
+}
+
+function openEventModal(eventId) {
+  const event = events.find((item) => item.id === eventId);
+  if (!event) return;
+
+  activeEventId = eventId;
+  lastFocusedElement = document.activeElement;
+  modalContent.innerHTML = buildModalView(event);
+  eventModal.hidden = false;
+  document.body.style.overflow = "hidden";
+
+  const firstButton = eventModal.querySelector("button:not([disabled])");
+  if (firstButton) firstButton.focus();
+}
+
+function closeEventModal() {
+  eventModal.hidden = true;
+  activeEventId = null;
+  document.body.style.overflow = "";
+  if (lastFocusedElement) lastFocusedElement.focus();
+}
+
+function handleRsvp(eventId) {
+  const target = events.find((item) => item.id === eventId);
+  if (!target) return;
+
+  if (target.spotsTaken >= target.capacity) {
+    showToast("Sorry, this meetup reached capacity.");
+    return;
+  }
+
+  rsvpState[eventId] = { confirmed: true, checkedIn: false };
+  modalContent.innerHTML = buildModalView(target);
+  showToast("RSVP saved. Private notes unlocked.");
+}
+
+function handleCheckin(eventId) {
+  if (!rsvpState[eventId]) return;
+  rsvpState[eventId].checkedIn = true;
+  const target = events.find((item) => item.id === eventId);
+  modalContent.innerHTML = buildModalView(target);
+  showToast("Check-in complete. Have fun!");
+}
+
+function setupFaq() {
+  document.querySelectorAll(".faq-item button").forEach((btn) => {
+    btn.addEventListener("click", () => {
+      const panel = document.getElementById(btn.getAttribute("aria-controls"));
+      const expanded = btn.getAttribute("aria-expanded") === "true";
+      btn.setAttribute("aria-expanded", String(!expanded));
+      panel.hidden = expanded;
+    });
+  });
+}
+
+function setupContactForm() {
+  const form = document.getElementById("contact-form");
+  const errors = document.getElementById("form-errors");
+
+  form.addEventListener("submit", (e) => {
+    e.preventDefault();
+    errors.textContent = "";
+    const formData = new FormData(form);
+    const name = String(formData.get("name") || "").trim();
+    const email = String(formData.get("email") || "").trim();
+    const message = String(formData.get("message") || "").trim();
+
+    const issues = [];
+    if (name.length < 2) issues.push("Please enter your name.");
+    if (!/^\S+@\S+\.\S+$/.test(email)) issues.push("Please enter a valid email.");
+    if (message.length < 10) issues.push("Please include a message with at least 10 characters.");
+
+    if (issues.length) {
+      errors.textContent = issues.join(" ");
+      return;
+    }
+
+    form.reset();
+    showToast("Saved! We'll follow up soon.");
+  });
+}
+
+function setupDocsModal() {
+  const docModal = document.getElementById("doc-modal");
+  const docClose = document.getElementById("doc-close");
+  const docContent = document.getElementById("doc-content");
+
+  document.querySelectorAll("[data-doc]").forEach((link) => {
+    link.addEventListener("click", (e) => {
+      e.preventDefault();
+      const key = link.dataset.doc;
+      const doc = docs[key];
+      if (!doc) return;
+      docContent.innerHTML = `<h2 id="doc-title">${doc.title}</h2>${doc.body}`;
+      docModal.hidden = false;
+      document.body.style.overflow = "hidden";
+      docClose.focus();
+    });
+  });
+
+  docClose.addEventListener("click", () => {
+    docModal.hidden = true;
+    document.body.style.overflow = "";
+  });
+
+  docModal.addEventListener("click", (e) => {
+    if (e.target.matches("[data-close-doc]")) {
+      docModal.hidden = true;
+      document.body.style.overflow = "";
+    }
+  });
+
+  document.addEventListener("keydown", (e) => {
+    if (e.key === "Escape" && !docModal.hidden) {
+      docModal.hidden = true;
+      document.body.style.overflow = "";
+    }
+  });
+}
+
+function setupNav() {
+  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
+    anchor.addEventListener("click", (e) => {
+      const href = anchor.getAttribute("href");
+      if (!href || href === "#") return;
+      const target = document.querySelector(href);
+      if (!target) return;
+      e.preventDefault();
+      target.scrollIntoView({ behavior: "smooth", block: "start" });
+      if (primaryNav.classList.contains("open")) {
+        primaryNav.classList.remove("open");
+        menuToggle.setAttribute("aria-expanded", "false");
+      }
+    });
+  });
+
+  menuToggle.addEventListener("click", () => {
+    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
+    menuToggle.setAttribute("aria-expanded", String(!expanded));
+    primaryNav.classList.toggle("open");
+  });
+}
+
+function initEventInteractions() {
+  grid.addEventListener("click", (e) => {
+    const card = e.target.closest("[data-event-id]");
+    if (!card) return;
+    openEventModal(Number(card.dataset.eventId));
+  });
+
+  eventModal.addEventListener("click", (e) => {
+    if (e.target.matches("[data-close-modal]")) closeEventModal();
+
+    const rsvpBtn = e.target.closest("[data-rsvp]");
+    if (rsvpBtn) handleRsvp(Number(rsvpBtn.dataset.rsvp));
+
+    const checkinBtn = e.target.closest("[data-checkin]");
+    if (checkinBtn) handleCheckin(Number(checkinBtn.dataset.checkin));
+  });
+
+  modalClose.addEventListener("click", closeEventModal);
+
+  document.addEventListener("keydown", (e) => {
+    if (e.key === "Escape" && !eventModal.hidden) {
+      closeEventModal();
+    }
+    if (!eventModal.hidden) {
+      trapFocus(eventModal, e);
+    }
+  });
+}
+
+document.getElementById("year").textContent = new Date().getFullYear();
+renderEvents();
+setupFaq();
+setupContactForm();
+setupDocsModal();
+setupNav();
+initEventInteractions();
