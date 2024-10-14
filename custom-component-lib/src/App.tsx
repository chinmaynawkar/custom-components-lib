import './App.css'
import { Grid, ThemeProvider, CssBaseline } from '@mui/material'
import ExpandableInfoChip from './common/ExpandableInfoCard'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2} mt={2} pl={4}>
        <Grid item xs={6} sm={6}>
          <ExpandableInfoChip
            icon={<div>Test</div>} // Test icon
            title="Craftsmanship" // Test title
            subtext="Declared" // Test subtext
            description="The printing and embroidery phase of the production of each item is made by Italian artisans."
            link="https://example.com/proof" // Test link for the expandable content
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
