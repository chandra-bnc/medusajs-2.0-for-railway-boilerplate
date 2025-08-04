import { defineRouteConfig } from "@medusajs/admin-sdk"
import GlobalAdminStyles from "./components/global-layout"

const customRouteConfig = defineRouteConfig({
  routes: [
    {
      path: "/companies",
      page: () => import("./routes/companies/page"),
    },
    {
      path: "/companies/:companyId",
      page: () => import("./routes/companies/[companyId]/page"),
    },
    {
      path: "/quotes",
      page: () => import("./routes/quotes/page"),
    },
    {
      path: "/quotes/:quoteId",
      page: () => import("./routes/quotes/[quoteId]/page"),
    },
    {
      path: "/quotes/:quoteId/manage",
      page: () => import("./routes/quotes/[quoteId]/manage/page"),
    },
    {
      path: "/approvals",
      page: () => import("./routes/approvals/page"),
    },
  ],
  widgets: [
    {
      zone: "order.list.before",
      widget: {
        Component: GlobalAdminStyles,
      },
    },
    {
      zone: "product.list.before", 
      widget: {
        Component: GlobalAdminStyles,
      },
    },
    {
      zone: "customer.list.before",
      widget: {
        Component: GlobalAdminStyles,
      },
    },
    {
      zone: "login.before",
      widget: {
        Component: GlobalAdminStyles,
      },
    },
  ],
})

export default customRouteConfig