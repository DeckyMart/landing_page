import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { APP_LINKS } from "@/lib/appLinks";

/**
 * A plain flex "pill" rather than <Chip icon={...}> — MUI's Chip clones
 * the icon element internally to attach the MuiChip-icon class, and that
 * cloning has been unreliable for SSR/CSR parity with the Next.js App
 * Router cache provider (icon renders server-side but not client-side,
 * or vice versa, causing a hydration mismatch). This sidesteps Chip's
 * icon slot entirely rather than fighting it.
 */
function IconPill({
  icon: Icon,
  label,
}: {
  icon: typeof BoltRoundedIcon;
  label: string;
}) {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{
        alignItems: "center",
        bgcolor: "error.main",
        color: "#fff",
        borderRadius: "16px",
        pl: 1,
        pr: 1.25,
        py: 0.5,
        fontSize: 13,
        fontWeight: 700,
      }}
    >
      <Icon sx={{ fontSize: 16 }} />
      <span>{label}</span>
    </Stack>
  );
}

function InterpreterDemoCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 24px 60px -24px rgba(15,52,96,0.35)",
        maxWidth: 420,
        width: "100%",
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: 1 }}
      >
        You describe it
      </Typography>
      <Box sx={{ bgcolor: "#f5f6fa", borderRadius: 2.5, p: 2, mt: 1 }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          &ldquo;Car won&apos;t start this morning — clicks once, battery is
          about a year old.&rdquo;
        </Typography>
      </Box>

      <Typography
        variant="overline"
        sx={{
          color: "text.secondary",
          fontWeight: 700,
          letterSpacing: 1,
          mt: 2.5,
          display: "block",
        }}
      >
        DeckyMart understands
      </Typography>
      <Stack
        direction="row"
        sx={{ mt: 1, flexWrap: "wrap", gap: 1, alignItems: "center" }}
      >
        <IconPill icon={BoltRoundedIcon} label="Emergency" />
        <Chip
          size="small"
          label="Automobile Electrician"
          sx={{ bgcolor: "primary.main", color: "#fff" }}
        />
        <Chip size="small" label="Toyota Corolla · 2016" variant="outlined" />
      </Stack>

      <Typography
        variant="overline"
        sx={{
          color: "text.secondary",
          fontWeight: 700,
          letterSpacing: 1,
          mt: 2.5,
          display: "block",
        }}
      >
        Best match, ranked first
      </Typography>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          mt: 1,
          p: 1.5,
          borderRadius: 2.5,
          bgcolor: "#e8f8f0",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 40,
            height: 40,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          CU
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Chigozie U.
            </Typography>
            <VerifiedRoundedIcon sx={{ fontSize: 15, color: "success.main" }} />
          </Stack>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            4.2 km away · Responds in ~9 min
          </Typography>
        </Box>
        <Stack direction="row" spacing={0.25} sx={{ alignItems: "center" }}>
          <StarRoundedIcon sx={{ fontSize: 16, color: "warning.main" }} />
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            4.9
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f5f6fa 0%, #ffffff 65%)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -120,
          right: -160,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(15,52,96,0.10), transparent)",
        }}
      />
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 10 } }}
      >
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Chip
              label="Now piloting in Lagos · Automobile trades"
              size="small"
              sx={{
                bgcolor: "rgba(15,52,96,0.08)",
                color: "primary.main",
                fontWeight: 700,
                mb: 2.5,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.4rem" },
                lineHeight: 1.08,
                mb: 2.5,
              }}
            >
              Describe the problem.
              <br />
              We find who can fix it.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                maxWidth: 520,
                mb: 4,
              }}
            >
              No categories to browse, no guesswork. Tell DeckyMart what&apos;s
              wrong with your car in your own words — we match you with a
              verified, nearby Solver, protect your payment until the job is
              done, and keep you posted every step of the way.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                href={APP_LINKS.customerSignUp}
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Get help now
              </Button>
              <Button
                href={APP_LINKS.solverSignUp}
                variant="outlined"
                size="large"
              >
                Become a Solver
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} sx={{ mt: 5, flexWrap: "wrap" }}>
              {[
                "Verified identity & skills",
                "Payment held until you approve the work",
                "Every job tracked, start to finish",
              ].map((point) => (
                <Stack
                  key={point}
                  direction="row"
                  spacing={1}
                  sx={{ maxWidth: 220, alignItems: "center" }}
                >
                  <VerifiedRoundedIcon
                    sx={{ fontSize: 18, color: "success.main", flexShrink: 0 }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    {point}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <InterpreterDemoCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
