import React, { useEffect } from 'react';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  useEffect(() => {
    props.sdk.window.startAutoResizer();
  }, []);

  return <RichTextEditor sdk={props.sdk} />
};

export default Field;
