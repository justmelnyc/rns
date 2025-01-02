import {faker} from '@faker-js/faker'


export function createCalendarEvent() {
    return {
        title: faker.lorem.words(),
        date: faker.date.future({refDate: new Date(2024, 11, 1)}),
        startTime: faker.date.future(),
        endTime: faker.date.future(),
        description: faker.lorem.paragraph(),
        location: faker.location.city(),
    }
}

export function createCalendarEvents(count: number) {
    return faker.helpers.multiple(createCalendarEvent, {count})
}

export const events = [
    // November 2024
    {
        title: 'Quarterly Sales Review',
        date: new Date('2024-11-05T09:00:00'),
        startTime: new Date('2024-11-05T09:00:00'),
        endTime: new Date('2024-11-05T11:00:00'),
        description: 'Review Q3 performance metrics and discuss Q4 targets with regional sales teams',
        location: 'Conference Room A'
    },
    {
        title: 'Team Building Workshop',
        date: new Date('2024-11-08T13:00:00'),
        startTime: new Date('2024-11-08T13:00:00'),
        endTime: new Date('2024-11-08T17:00:00'),
        description: 'Interactive workshop focusing on communication and collaboration skills',
        location: 'Community Center'
    },
    {
        title: 'Product Launch Planning',
        date: new Date('2024-11-05T10:00:00'),
        startTime: new Date('2024-11-05T10:00:00'),
        endTime: new Date('2024-11-05T12:30:00'),
        description: 'Strategic planning session for the upcoming winter product line launch',
        location: 'Marketing Department'
    },
    {
        title: 'Client Presentation',
        date: new Date('2024-11-15T14:00:00'),
        startTime: new Date('2024-11-15T14:00:00'),
        endTime: new Date('2024-11-15T15:30:00'),
        description: 'Presenting new service offerings to key client stakeholders',
        location: 'Virtual Meeting'
    },
    {
        title: 'Tech Stack Update Meeting',
        date: new Date('2024-11-18T11:00:00'),
        startTime: new Date('2024-11-18T11:00:00'),
        endTime: new Date('2024-11-18T12:00:00'),
        description: 'Discussion of planned updates to development infrastructure and tools',
        location: 'Tech Lab'
    },
    {
        title: 'Employee Training Session',
        date: new Date('2024-11-21T09:30:00'),
        startTime: new Date('2024-11-21T09:30:00'),
        endTime: new Date('2024-11-21T16:30:00'),
        description: 'Comprehensive training on new compliance procedures and software systems',
        location: 'Training Room'
    },
    {
        title: 'Budget Planning 2025',
        date: new Date('2024-11-25T13:00:00'),
        startTime: new Date('2024-11-25T13:00:00'),
        endTime: new Date('2024-11-25T17:00:00'),
        description: 'Annual budget planning session with department heads',
        location: 'Executive Boardroom'
    },
    {
        title: 'Website Redesign Review',
        date: new Date('2024-11-27T10:00:00'),
        startTime: new Date('2024-11-27T10:00:00'),
        endTime: new Date('2024-11-27T11:30:00'),
        description: 'Review and feedback session for new website prototypes',
        location: 'Design Studio'
    },
    {
        title: 'Thanksgiving Office Party',
        date: new Date('2024-11-28T15:00:00'),
        startTime: new Date('2024-11-28T15:00:00'),
        endTime: new Date('2024-11-28T18:00:00'),
        description: 'Annual office celebration with catered dinner and team activities',
        location: 'Office Lounge'
    },
    {
        title: 'End of Month Review',
        date: new Date('2024-11-29T09:00:00'),
        startTime: new Date('2024-11-29T09:00:00'),
        endTime: new Date('2024-11-29T10:30:00'),
        description: 'Monthly performance review and goal setting for December',
        location: 'Conference Room B'
    },

    // December 2024
    {
        title: 'Holiday Marketing Campaign Launch',
        date: new Date('2024-12-02T10:00:00'),
        startTime: new Date('2024-12-02T10:00:00'),
        endTime: new Date('2024-12-02T12:00:00'),
        description: 'Kickoff meeting for holiday season marketing initiatives',
        location: 'Marketing War Room'
    },
    {
        title: 'Annual Security Audit',
        date: new Date('2024-12-05T09:00:00'),
        startTime: new Date('2024-12-05T09:00:00'),
        endTime: new Date('2024-12-05T17:00:00'),
        description: 'Comprehensive review of security protocols and systems',
        location: 'IT Department'
    },
    {
        title: 'Client Holiday Reception',
        date: new Date('2024-12-08T18:00:00'),
        startTime: new Date('2024-12-08T18:00:00'),
        endTime: new Date('2024-12-08T21:00:00'),
        description: 'Annual holiday networking event with key clients and partners',
        location: 'Grand Hotel Ballroom'
    },
    {
        title: 'Year-End Performance Reviews',
        date: new Date('2024-12-11T09:00:00'),
        startTime: new Date('2024-12-11T09:00:00'),
        endTime: new Date('2024-12-11T17:00:00'),
        description: 'Individual performance reviews and goal setting for 2025',
        location: 'HR Office'
    },
    {
        title: 'Product Development Sprint Review',
        date: new Date('2024-12-13T14:00:00'),
        startTime: new Date('2024-12-13T14:00:00'),
        endTime: new Date('2024-12-13T16:00:00'),
        description: 'Final sprint review of the year with development team',
        location: 'Agile Room'
    },
    {
        title: 'Holiday Community Outreach',
        date: new Date('2024-12-16T10:00:00'),
        startTime: new Date('2024-12-16T10:00:00'),
        endTime: new Date('2024-12-16T15:00:00'),
        description: 'Volunteer event at local food bank with company team',
        location: 'Community Food Bank'
    },
    {
        title: '2025 Strategy Planning',
        date: new Date('2024-12-18T09:00:00'),
        startTime: new Date('2024-12-18T09:00:00'),
        endTime: new Date('2024-12-18T16:00:00'),
        description: 'Executive planning session for upcoming year initiatives',
        location: 'Executive Suite'
    },
    {
        title: 'Office Holiday Party',
        date: new Date('2024-12-20T17:00:00'),
        startTime: new Date('2024-12-20T17:00:00'),
        endTime: new Date('2024-12-20T22:00:00'),
        description: 'Annual company holiday celebration with dinner and entertainment',
        location: 'City Convention Center'
    },
    {
        title: 'Year-End Inventory',
        date: new Date('2024-12-27T09:00:00'),
        startTime: new Date('2024-12-27T09:00:00'),
        endTime: new Date('2024-12-27T18:00:00'),
        description: 'Annual inventory count and reconciliation',
        location: 'Warehouse'
    },
    {
        title: 'New Year Planning Session',
        date: new Date('2024-12-30T10:00:00'),
        startTime: new Date('2024-12-30T10:00:00'),
        endTime: new Date('2024-12-30T15:00:00'),
        description: 'Department planning for Q1 2025 initiatives',
        location: 'Conference Center'
    },

    // January 2025
    {
        title: 'New Year Kickoff Meeting',
        date: new Date('2025-01-03T09:00:00'),
        startTime: new Date('2025-01-03T09:00:00'),
        endTime: new Date('2025-01-03T11:00:00'),
        description: 'Company-wide meeting to discuss 2025 goals and initiatives',
        location: 'Main Auditorium'
    },
    {
        title: 'Q1 Project Planning',
        date: new Date('2025-01-07T10:00:00'),
        startTime: new Date('2025-01-07T10:00:00'),
        endTime: new Date('2025-01-07T16:00:00'),
        description: 'Detailed planning session for Q1 2025 project roadmap',
        location: 'Project Room'
    },
    {
        title: 'New Employee Orientation',
        date: new Date('2025-01-10T09:00:00'),
        startTime: new Date('2025-01-10T09:00:00'),
        endTime: new Date('2025-01-10T17:00:00'),
        description: 'Onboarding session for new team members joining in January',
        location: 'Training Center'
    },
    {
        title: 'Customer Experience Workshop',
        date: new Date('2025-01-14T13:00:00'),
        startTime: new Date('2025-01-14T13:00:00'),
        endTime: new Date('2025-01-14T17:00:00'),
        description: 'Interactive session focusing on improving customer service metrics',
        location: 'Workshop Room A'
    },
    {
        title: 'Technology Innovation Meeting',
        date: new Date('2025-01-17T11:00:00'),
        startTime: new Date('2025-01-17T11:00:00'),
        endTime: new Date('2025-01-17T13:00:00'),
        description: 'Discussion of emerging technologies and potential implementations',
        location: 'Innovation Lab'
    },
    {
        title: 'Vendor Contract Reviews',
        date: new Date('2025-01-21T09:00:00'),
        startTime: new Date('2025-01-21T09:00:00'),
        endTime: new Date('2025-01-21T16:00:00'),
        description: 'Annual review of vendor agreements and performance',
        location: 'Legal Department'
    },
    {
        title: 'Marketing Strategy Session',
        date: new Date('2025-01-23T10:00:00'),
        startTime: new Date('2025-01-23T10:00:00'),
        endTime: new Date('2025-01-23T15:00:00'),
        description: 'Planning session for Q1 marketing campaigns and content strategy',
        location: 'Marketing Room'
    },
    {
        title: 'Team Wellness Day',
        date: new Date('2025-01-27T09:00:00'),
        startTime: new Date('2025-01-27T09:00:00'),
        endTime: new Date('2025-01-27T17:00:00'),
        description: 'Company wellness event featuring health screenings and activities',
        location: 'Wellness Center'
    },
    {
        title: 'Financial Review Meeting',
        date: new Date('2025-01-29T14:00:00'),
        startTime: new Date('2025-01-29T14:00:00'),
        endTime: new Date('2025-01-29T16:00:00'),
        description: 'Review of January financial performance and forecasting',
        location: 'Finance Conference Room'
    },
    {
        title: 'Cross-Department Collaboration',
        date: new Date('2025-01-31T10:00:00'),
        startTime: new Date('2025-01-31T10:00:00'),
        endTime: new Date('2025-01-31T12:00:00'),
        description: 'Inter-departmental meeting to improve workflow efficiency',
        location: 'Collaboration Space'
    },

    // February 2025
    {
        title: 'Q1 Sales Strategy Review',
        date: new Date('2025-02-03T09:00:00'),
        startTime: new Date('2025-02-03T09:00:00'),
        endTime: new Date('2025-02-03T12:00:00'),
        description: 'Review of sales performance and strategy adjustment for Q1',
        location: 'Sales Department'
    },
    {
        title: 'Product Development Workshop',
        date: new Date('2025-02-06T10:00:00'),
        startTime: new Date('2025-02-06T10:00:00'),
        endTime: new Date('2025-02-06T16:00:00'),
        description: 'Intensive workshop for new product feature development',
        location: 'Innovation Center'
    },
    {
        title: 'Leadership Training',
        date: new Date('2025-02-10T09:00:00'),
        startTime: new Date('2025-02-10T09:00:00'),
        endTime: new Date('2025-02-10T17:00:00'),
        description: 'Management skills development program for team leaders',
        location: 'Executive Training Room'
    },
    {
        title: 'Valentine\'s Day Office Event',
        date: new Date('2025-02-14T15:00:00'),
        startTime: new Date('2025-02-14T15:00:00'),
        endTime: new Date('2025-02-14T17:00:00'),
        description: 'Office celebration with treats and team building activities',
        location: 'Break Room'
    },
    {
        title: 'Customer Advisory Board',
        date: new Date('2025-02-17T13:00:00'),
        startTime: new Date('2025-02-17T13:00:00'),
        endTime: new Date('2025-02-17T16:00:00'),
        description: 'Quarterly meeting with key customers for product feedback',
        location: 'Board Room'
    },
    {
        title: 'IT Infrastructure Review',
        date: new Date('2025-02-20T10:00:00'),
        startTime: new Date('2025-02-20T10:00:00'),
        endTime: new Date('2025-02-20T15:00:00'),
        description: 'Assessment of current IT systems and future needs',
        location: 'Server Room'
    },
    {
        title: 'Employee Recognition Event',
        date: new Date('2025-02-24T16:00:00'),
        startTime: new Date('2025-02-24T16:00:00'),
        endTime: new Date('2025-02-24T18:00:00'),
        description: 'Ceremony to recognize outstanding employee achievements',
        location: 'Main Hall'
    },
    {
        title: 'Risk Management Meeting',
        date: new Date('2025-02-26T11:00:00'),
        startTime: new Date('2025-02-26T11:00:00'),
        endTime: new Date('2025-02-26T13:00:00'),
        description: 'Quarterly review of risk assessment and mitigation strategies',
        location: 'Security Office'
    },
    {
        title: 'Digital Marketing Workshop',
        date: new Date('2025-02-27T09:00:00'),
        startTime: new Date('2025-02-27T09:00:00'),
        endTime: new Date('2025-02-27T12:00:00'),
        description: 'Training session on latest digital marketing trends and tools',
        location: 'Digital Lab'
    },
]