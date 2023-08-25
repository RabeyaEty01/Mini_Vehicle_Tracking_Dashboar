import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const formatDate = (date, template = 'MMM dd, yyyy') => {
    return format(parseISO(new Date(date).toISOString()), template);
};
const formatDateTime = (date, template = 'yyyy-MM-dd hh:mm:ss') => {
    return format(parseISO(new Date(date).toISOString()), template);
};

export { formatDate, formatDateTime };
