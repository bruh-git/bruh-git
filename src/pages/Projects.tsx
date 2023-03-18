import Frontend from '../templates/Frontend';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion, Reorder } from 'framer-motion';
import ProjectCard from '../atoms/ProjectCard';
import projects from '../db/data';

function Projects() {
  return (
    <Frontend>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              style={{ paddingTop: '72px' }}
            >
              <h1>Projects</h1>
              <Grid
                container
                component={Reorder.Group}
                values={projects}
                axis="x"
                spacing={{ xs: 4, sm: 4, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ marginTop: '18px', listStyleType: 'none', padding: '50px'}}
              >
                {projects.map((project) => (
                  <Grid
                    item
                    component={Reorder.Item}
                    value={project}
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    dragConstraints={{ left: -1, right: 1 }}
                    xs={12}
                    sm={4}
                    md={4}
                    key={project.id}
                  >
                    <ProjectCard key={project.id} {...project} />
                  </Grid>
                ))}
                {Boolean(!projects.length) && (
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="body1" align="center" paragraph>
                      'Não há projetos cadastrados'
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </motion.div>
    </Frontend>
  )
}

export default Projects;
/* import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion, Reorder } from 'framer-motion';
import * as React from 'react';
import ProjectCard from '../atoms/ProjectCard';
import projects from '../db/data';

function Projects() {

  return (
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        style={{ paddingTop: '72px' }}
      >
        <Grid
          container
          component={Reorder.Group}
          values={projects}
          axis="x"
          spacing={{ xs: 4, sm: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ marginTop: '18px', listStyleType: 'none', padding: 0 }}
        >
          {projects.map((project) => (
            <Grid
              item
              component={Reorder.Item}
              value={project}
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              dragConstraints={{ left: -1, right: 1 }}
              xs={12}
              sm={4}
              md={4}
              key={project.id}
            >
              <ProjectCard key={project.id} {...project} />
            </Grid>
          ))}
          {Boolean(!projects.length) && (
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body1" align="center" paragraph>
                'Não há projetos cadastrados'
              </Typography>
            </Grid>
          )}
        </Grid>
      </motion.div>
  );
}

export default Projects; */
