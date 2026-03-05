/* Liliia Dotsenko */
function initProductTabs() {
  const tabsContainer =
    document.querySelector(".products-selection__tabs") || document;

  const tabs = Array.from(
    document.querySelectorAll(".products-selection__tab"),
  );
  const panels = Array.from(document.querySelectorAll(".products__panel"));
  const sortSelect = document.querySelector("#products-sort");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab, index) => {
    tab.dataset.index = String(index);
  });

  panels.forEach((panel) => {
    const productsList = panel.querySelector(".products__list");
    if (!productsList) return;

    Array.from(productsList.children).forEach((child, originalIndex) => {
      if (child.matches?.(".products__item")) {
        child.dataset.orig = String(originalIndex);
      }
    });
  });

  function getActiveTabIndex() {
    const activeIndex = tabs.findIndex((tab) =>
      tab.classList.contains("products-selection__tab--active"),
    );
    return activeIndex >= 0 ? activeIndex : 0;
  }

  function getSortMode() {
    return (
      sortSelect?.value || localStorage.getItem("productsSort") || "default"
    );
  }

  function getPriceValue(productItem) {
    const rawText =
      productItem.querySelector(".product-card__price")?.textContent || "";
    const normalized = rawText.replace(",", ".").replace(/[^\d.]/g, "");
    const parsed = parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function getNameValue(productItem) {
    return (
      productItem.querySelector(".product-card__title-link")?.textContent || ""
    )
      .trim()
      .toLowerCase();
  }

  function sortPanelItems(panelIndex) {
    const panel = panels[panelIndex];
    if (!panel) return;

    const productsList = panel.querySelector(".products__list");
    if (!productsList) return;

    const productItems = Array.from(productsList.children).filter((child) =>
      child.matches?.(".products__item"),
    );

    const sortMode = getSortMode();

    if (sortMode === "default") {
      productItems
        .sort(
          (firstItem, secondItem) =>
            Number(firstItem.dataset.orig || 0) -
            Number(secondItem.dataset.orig || 0),
        )
        .forEach((productItem) => productsList.appendChild(productItem));
      return;
    }

    const sortDirection = sortMode.endsWith("desc") ? -1 : 1;
    const isPriceSort = sortMode.startsWith("price");

    productItems
      .sort((firstItem, secondItem) => {
        if (isPriceSort) {
          const firstValue = getPriceValue(firstItem);
          const secondValue = getPriceValue(secondItem);
          if (firstValue === secondValue) return 0;
          return (firstValue > secondValue ? 1 : -1) * sortDirection;
        }

        const firstValue = getNameValue(firstItem);
        const secondValue = getNameValue(secondItem);
        if (firstValue === secondValue) return 0;
        return (firstValue > secondValue ? 1 : -1) * sortDirection;
      })
      .forEach((productItem) => productsList.appendChild(productItem));
  }

  function activateTab(tabIndex) {
    tabs.forEach((tab, i) => {
      const isActive = i === tabIndex;

      tab.classList.toggle("products-selection__tab--active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;

      const panel = panels[i];
      if (!panel) return;

      panel.hidden = !isActive;
      panel.classList.toggle("products__panel--active", isActive);
    });

    localStorage.setItem("productsActiveTab", String(tabIndex));
    sortPanelItems(tabIndex);
  }

  tabsContainer.addEventListener("click", (event) => {
    const clickedTab = event.target.closest(".products-selection__tab");
    if (!clickedTab?.dataset.index) return;

    const tabIndex = Number(clickedTab.dataset.index);
    if (!Number.isFinite(tabIndex)) return;

    activateTab(tabIndex);
  });

  tabsContainer.addEventListener("keydown", (event) => {
    const focusedTab = event.target.closest(".products-selection__tab");
    if (!focusedTab?.dataset.index) return;

    const currentIndex = Number(focusedTab.dataset.index);
    if (!Number.isFinite(currentIndex)) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      tabs[nextIndex].focus();
      activateTab(nextIndex);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      tabs[previousIndex].focus();
      activateTab(previousIndex);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      tabs[0].focus();
      activateTab(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const lastIndex = tabs.length - 1;
      tabs[lastIndex].focus();
      activateTab(lastIndex);
      return;
    }

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      activateTab(currentIndex);
    }
  });

  if (sortSelect) {
    sortSelect.value = getSortMode();

    sortSelect.addEventListener("change", () => {
      localStorage.setItem("productsSort", sortSelect.value);
      sortPanelItems(getActiveTabIndex());
    });
  }

  const storedIndex = Number(localStorage.getItem("productsActiveTab"));
  const hasValidStoredIndex =
    Number.isFinite(storedIndex) &&
    storedIndex >= 0 &&
    storedIndex < tabs.length;

  const initialIndex = hasValidStoredIndex ? storedIndex : getActiveTabIndex();
  activateTab(initialIndex);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProductTabs);
} else {
  initProductTabs();
}
