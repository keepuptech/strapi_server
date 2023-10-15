import type { Schema, Attribute } from '@strapi/strapi';

export interface ExamMarksExamMarks extends Schema.Component {
  collectionName: 'components_exam_marks_exam_marks';
  info: {
    displayName: 'exam-marks';
  };
  attributes: {
    exam: Attribute.Relation<
      'exam-marks.exam-marks',
      'oneToOne',
      'api::exam.exam'
    >;
    subjectMarks: Attribute.Component<'subject-marks.subject-marks', true>;
  };
}

export interface SubjectMarksSubjectMarks extends Schema.Component {
  collectionName: 'components_subject_marks_subject_marks';
  info: {
    displayName: 'subject-marks';
  };
  attributes: {
    subject: Attribute.Relation<
      'subject-marks.subject-marks',
      'oneToOne',
      'api::subject.subject'
    >;
    marks: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'exam-marks.exam-marks': ExamMarksExamMarks;
      'subject-marks.subject-marks': SubjectMarksSubjectMarks;
    }
  }
}
