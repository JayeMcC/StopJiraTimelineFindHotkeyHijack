if (
  window.location.href.includes(".atlassian.net/jira/software/projects") &&
  window.location.href.includes("/timeline")
) {
  window.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.stopImmediatePropagation();
      }
    },
    true
  );
}
