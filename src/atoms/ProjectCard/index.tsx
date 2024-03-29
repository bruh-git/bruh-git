import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import PropTypes from 'prop-types';
import * as React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({
  screenshot,
  title,
  description,
  tools,
  repositoryLink,
  deployLink,
}) {

  const [elevation, setElevation] = React.useState(2);

  return (
    <Card
      sx={{ height: '100%', position: 'relative', backdropFilter: 'blur(10px)' }}
      elevation={elevation}
      onMouseEnter={() => setElevation(10)}
      onMouseLeave={() => setElevation(3)}
    >
      <CardMedia
        component="img"
        image={screenshot}
        alt="screenshot"
      />
      <CardContent sx={{ paddingBottom: '48px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}{' '}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: '16px',
          }}
        >
          {tools.map(({ icon, label }) => (
            <Chip
              key={label}
              variant="outlined"
              size="small"
              icon={icon}
              label={label}
              sx={{ margin: '0 8px 8px 0' }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          bottom: '8px',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0',
          position: 'absolute',
          right: '8px',
          width: '100%',
        }}
      >
        <IconButton
          size="small"
          LinkComponent="a"
          href={repositoryLink}
          target="_blank"
          color="primary"
          title='Repositório'
        >
          <SvgIcon inheritViewBox>
            <FaGithub />
          </SvgIcon>
        </IconButton>
        {deployLink && (
          <IconButton
            size="small"
            LinkComponent="a"
            href={deployLink}
            color="primary"
            title="Deploy"
          >
            <SvgIcon inheritViewBox>
              <FaExternalLinkAlt />
            </SvgIcon>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  screenshot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
  ).isRequired,
  repositoryLink: PropTypes.string.isRequired,
  deployLink: PropTypes.string,
};

export default ProjectCard;