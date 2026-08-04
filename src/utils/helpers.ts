/**
 * Portfolio helper utilities
 */

/**
 * Ensures external URLs have standard secure attributes for tabnabbing prevention
 */
export const getSecureLinkProps = (url: string) => {
  const isExternal = url.startsWith('http://') || url.startsWith('https://');
  return isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
};

/**
 * Format date string into standard display format
 */
export const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  return dateStr;
};
