let username="admin";
if (userRole === "guest" || userRole === "editor" || userRole === "admin") {
  console.log("Login successful. Checking...");
  if (userRole === "admin") {
    console.log("Welcome, Admin! You have full access");
  }
} else {
  console.log("Access denied");
}