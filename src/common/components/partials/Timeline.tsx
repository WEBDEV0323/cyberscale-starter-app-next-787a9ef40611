import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import Routes from '@common/defs/routes';
// import '@common/assets/styles/custom.css';

interface Icon {
  icon: JSX.Element;
  iconStyle: React.CSSProperties;
}

interface TimelineItem {
  icon?: Icon;
  date?: string;
  title?: string;
  subtitle?: string;
  desc?: string;
}

const workIcon: Icon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: '#00AB55', color: '#fff' },
};
const schoolIcon: Icon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon: Icon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

const Timeline = (): JSX.Element => {
  const timeline: TimelineItem[] = [
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      icon: workIcon,
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    },
    {
      icon: workIcon,
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: workIcon,
      date: '2006 - 2008',
      title: 'Web Designer',
      subtitle: 'San Francisco, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: 'April 2013',
      title: 'Content Marketing for Web, Mobile and Social Media',
      subtitle: 'Online Course',
      desc: 'Strategy, Social Media',
    },
    {
      icon: schoolIcon,
      date: 'November 2012',
      title: 'Agile Development Scrum Master',
      subtitle: 'Certification',
      desc: 'Creative Direction, User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '2002 - 2006',
      title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
      subtitle: 'Bachelor Degree',
      desc: 'Creative Direction, Visual Design',
    },
    {
      icon: starIcon,
      date: '2002 - 2006',
      title: 'Start',
      subtitle: 'Bachelor Degree',
      desc: 'Creative Direction, Visual Design',
    },
  ];

  const router = useRouter();

  return (
    <div className="App">
      <div className="timeline-create-btn">
        <Button
          variant="contained"
          endIcon={
            <ArrowForwardIos
              fontSize="small"
              className="arrow-icon"
              sx={{ fontSize: '12px', transition: 'all, 0.15s' }}
            />
          }
          onClick={() => router.push(Routes.Auth.Register)}
          sx={{
            display: { xs: 'none', md: 'flex' },
            '&:hover': {
              '.arrow-icon': {
                transform: 'translateX(0.25rem)',
              },
            },
          }}
        >
          Create
        </Button>
      </div>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : { background: '#00AB55', color: '#fff' };
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : { borderRight: '7px solid  #00AB55' };

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
