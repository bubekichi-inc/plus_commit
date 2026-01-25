export type CasualInterviewFormData = {
    preferredDate1: string
    preferredDate2: string
    preferredDate3: string
    questions: string
}

export type RecruitFormErrorMap<TData> = Partial<Record<keyof TData, string>>

export const CASUAL_QUESTION_MAX_LENGTH = 500
const REGISTRATION_PASSWORD_MIN_LENGTH = 8

export function createCasualInterviewFormData(): CasualInterviewFormData {
    return {
        preferredDate1: "",
        preferredDate2: "",
        preferredDate3: "",
        questions: "",
    }
}

export function normalizeCasualInterviewFormData(data: CasualInterviewFormData): CasualInterviewFormData {
    return {
        preferredDate1: data.preferredDate1.trim(),
        preferredDate2: data.preferredDate2.trim(),
        preferredDate3: data.preferredDate3.trim(),
        questions: data.questions.trim(),
    }
}

export type CasualInterviewValidationResult = {
    isValid: boolean
    errors: RecruitFormErrorMap<CasualInterviewFormData>
}

export function validateCasualInterviewForm(data: CasualInterviewFormData): CasualInterviewValidationResult {
    const errors: RecruitFormErrorMap<CasualInterviewFormData> = {}

    if (!data.preferredDate1) {
        errors.preferredDate1 = "第1希望は必須です"
    }

    if (!data.preferredDate1 && !data.preferredDate2 && !data.preferredDate3) {
        errors.preferredDate1 = errors.preferredDate1 || "少なくとも1つの候補日時を入力してください"
    }

    if (data.questions && data.questions.length > CASUAL_QUESTION_MAX_LENGTH) {
        errors.questions = `質問は${CASUAL_QUESTION_MAX_LENGTH}文字以内で入力してください`
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    }
}

export const CASUAL_INTERVIEW_APPLICATION_STOPPED = true

export function validateRegistrationPasswords(password: string, confirmPassword: string) {
    const sanitizedPassword = password.trim()
    const sanitizedConfirm = confirmPassword.trim()

    if (sanitizedPassword.length < REGISTRATION_PASSWORD_MIN_LENGTH) {
        return `パスワードは${REGISTRATION_PASSWORD_MIN_LENGTH}文字以上で入力してください`
    }

    if (sanitizedPassword !== sanitizedConfirm) {
        return "パスワードが一致しません"
    }

    return null
}
