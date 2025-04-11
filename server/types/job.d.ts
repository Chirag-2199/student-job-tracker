export interface JobType {
    company: string;
    role: string;
    status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
    date: Date;
    link: string;
}
