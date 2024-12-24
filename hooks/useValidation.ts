import { FormData, ValidationSuccessLevel } from '@/types/new-session';

export const useValidation = (formData: FormData, setFormData: (data: FormData) => void) => {
  const handleLevelClick = (clickedKey: keyof ValidationSuccessLevel, levels: (keyof ValidationSuccessLevel)[]) => {
    const clickedIndex = levels.indexOf(clickedKey);
    setFormData({
      ...formData,
      validation: {
        ...formData.validation,
        successByLevel: {
          ...formData.validation.successByLevel,
          ...levels.reduce((acc, key, index) => ({
            ...acc,
            [key]: index <= clickedIndex
          }), {})
        }
      }
    });
  };

  return { handleLevelClick };
}; 