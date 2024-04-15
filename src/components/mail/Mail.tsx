import "./mail.scss";

import { TextField } from "@mui/material";

const Mail = () => {
  return (
    <div className="mailContainer">
      <h1>contact me</h1>
      <div className="inputs">
        <TextField
          /*  variant="standard"
          required
          fullWidth
          label="Name"
          type="Text"
          InputLabelProps={{
            style: {
              color: "var(--body-color)",
              borderColor: "var(--body-color)",
              fontFamily: " var(--font-jakart)",
            },
          }}
         
          sx={{
            "& .MuiInput-root": {
              "&:before": {
                borderColor: "var(--body-color)",
              },
              // Border on focus
              "&:after": {
                borderColor: "var(--body-color)",
                borderWidth: "1px",
              },
              ":hover(.Mui-hover)": {
                "&:before": {
                  borderColor: "var(--body-color)",
                  borderWidth: "1px",
                },
              },
            },
          }} */

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
          }}
        />
        <TextField
          variant="standard"
          required
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
          }}
        />
      </div>
    </div>
  );
};

export default Mail;
