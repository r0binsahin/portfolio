import "./mail.scss";

import { TextField } from "@mui/material";

const Mail = () => {
  return (
    <div className="mailContainer">
      <h1>contact me</h1>
      <div className="inputs">
        <form action="submit">
          <TextField
            label="Name"
            variant="standard"
            required
            fullWidth
            sx={{
              "& .MuiInput-root": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                // Bottom border
                "&:before": {
                  borderColor: "var(--body-color)",
                  borderWidth: 1,
                },
                // Border on focus
                "&:after": {
                  borderColor: "var(--font-jakart)",
                  borderWidth: 1,
                },
                ":hover:not(.Mui-focused)": {
                  "&:before": {
                    borderColor: "var(--font-jakart)",
                    borderWidth: 1,
                  },
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                "&.Mui-focused": {
                  color: "var(--body-color)",
                },
              },
              "& .MuiInput-underline": {
                paddingTop: "20px",
              },
            }}
          />
          <TextField
            variant="standard"
            required
            fullWidth
            label="Email"
            type="email"
            sx={{
              "& .MuiInput-root": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                // Bottom border
                "&:before": {
                  borderColor: "var(--body-color)",
                  borderWidth: 1,
                },
                // Border on focus
                "&:after": {
                  borderColor: "var(--font-jakart)",
                  borderWidth: 1,
                },
                ":hover:not(.Mui-focused)": {
                  "&:before": {
                    borderColor: "var(--font-jakart)",
                    borderWidth: 1,
                  },
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                "&.Mui-focused": {
                  color: "var(--body-color)",
                },
              },
              "& .MuiInput-underline": {
                paddingTop: "20px",
              },
            }}
          />
          <TextField
            variant="standard"
            label="Phone"
            fullWidth
            type="Text"
            sx={{
              "& .MuiInput-root": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                // Bottom border
                "&:before": {
                  borderColor: "var(--body-color)",
                  borderWidth: 1,
                },
                // Border on focus
                "&:after": {
                  borderColor: "var(--font-jakart)",
                  borderWidth: 1,
                },
                ":hover:not(.Mui-focused)": {
                  "&:before": {
                    borderColor: "var(--font-jakart)",
                    borderWidth: 1,
                  },
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                "&.Mui-focused": {
                  color: "var(--body-color)",
                },
              },
              "& .MuiInput-underline": {
                paddingTop: "20px",
              },
            }}
          />
          <TextField
            variant="standard"
            required
            /*   multiline
            rows={5} */
            label="Message"
            type="Text"
            fullWidth
            sx={{
              "& .MuiInput-root": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                // Bottom border
                "&:before": {
                  borderColor: "var(--body-color)",
                  borderWidth: 1,
                },
                // Border on focus
                "&:after": {
                  borderColor: "var(--font-jakart)",
                  borderWidth: 1,
                },
                ":hover:not(.Mui-focused)": {
                  "&:before": {
                    borderColor: "var(--font-jakart)",
                    borderWidth: 1,
                  },
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "var(--body-color)",
                fontFamily: " var(--font-jakart)",

                "&.Mui-focused": {
                  color: "var(--body-color)",
                },
              },

              "& .MuiInput-underline": {
                paddingTop: "20px",
              },
            }}
          />

          <button type="submit">Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
