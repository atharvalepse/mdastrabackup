'use client'
import { useEffect } from 'react';

const LeadConnectorForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for form submission messages from the iframe
    const handleMessage = (event) => {
      if (!event.data) return;

      let dataStr = '';
      try {
        dataStr = typeof event.data === 'string' ? event.data : JSON.stringify(event.data);
      } catch (e) {
        dataStr = String(event.data);
      }
      
      const lowerStr = dataStr.toLowerCase();

      // Match variations like 'form_submitted', 'form-submit', 'ghl_form_submit'
      if (lowerStr.includes('form') && (lowerStr.includes('submit') || lowerStr.includes('success'))) {
        // Ignore standard iframe resizer messages that are just checking height or init
        if (!lowerStr.includes('init') && !lowerStr.includes('height') && !lowerStr.includes('scroll')) {
          window.location.href = 'https://booking.mdastra.com/thank-you-5906';
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/dDvTFDgECVLq4k1LsCBq"
      id="inline-dDvTFDgECVLq4k1LsCBq"
      style={{ width: '100%', border: 'none' }}
      scrolling="no"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Form"
      data-layout-iframe-id="inline-dDvTFDgECVLq4k1LsCBq"
      data-form-id="dDvTFDgECVLq4k1LsCBq"
      title="Website Form"
    ></iframe>
  );
};

export default LeadConnectorForm;
