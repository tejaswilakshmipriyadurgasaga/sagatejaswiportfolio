import { createFileRoute } from "@tanstack/react-router";
import resumeAsset from "@/assets/SAGA_TEJASWI.pdf.asset.json";

const RESUME_FILENAME = "SAGA_TEJASWI.pdf";

export const Route = createFileRoute("/api/public/resume")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const resumeUrl = new URL(resumeAsset.url, request.url);
        const resumeResponse = await fetch(resumeUrl);

        if (!resumeResponse.ok || !resumeResponse.body) {
          return new Response("Resume unavailable", { status: 404 });
        }

        return new Response(resumeResponse.body, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${RESUME_FILENAME}"`,
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});