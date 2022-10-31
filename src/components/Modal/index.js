import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import { Input, Button } from "../Fields";

import "./modal.scss";

function DynModel({
  openModal,
  modelTitle,
  centered,
  width,
  handleCancelModal,
  content,
  modalchanges,
  closable,
  actionSave,
  actionCancel,
  customStyles,
  onSubmit,
  onCancel,
  disabled,
  alignment,
  footerButton,
}) {
  const { t } = useTranslation();

  return (
    <Modal
      className={`modelContainer ${modalchanges}`}
      title={modelTitle}
      centered={centered ? true : false}
      visible={openModal}
      footer={null}
      width={width ? width : 650}
      // zIndex={1201}
      onCancel={handleCancelModal}
      maskClosable={false}
      closable={closable ? closable : false}
    >
      {content}
      {footerButton && (
        <div className="modal-footer" style={{ textAlign: alignment }}>
          <Button
            title={t("Add")}
            customStyles={`modal-save ${customStyles && customStyles}`}
            onClick={onSubmit}
            disabled={disabled}
          />
          <Button
            title={t("Cancel")}
            customStyles={`modal-cancel ${customStyles && customStyles}`}
            onClick={onCancel}
            disabled={disabled}
          />
        </div>
      )}
    </Modal>
  );
}

export default DynModel;
