// src/lib/types.ts

// Enum for Batch Status
export enum BatchStatus {
    Pending = 'Pending',
    InProgress = 'In Progress',
    Completed = 'Completed',
    Failed = 'Failed'
}

// Enum for Material Type
export enum MaterialType {
    Organic = 'Organic',
    Inorganic = 'Inorganic',
    Recycled = 'Recycled'
}

// Interface for Source Site
export interface SourceSite {
    id: number;
    name: string;
    location: string;
}

// Interface for Batch
export interface Batch {
    id: number;
    status: BatchStatus;
    materials: MaterialType[];
    created_at: string;
}

// Interface for Processing Log
export interface ProcessingLog {
    id: number;
    batchId: number;
    timestamp: string;
    action: string;
}

// Interface for Validation Record
export interface ValidationRecord {
    id: number;
    batchId: number;
    isValid: boolean;
    comments: string;
}

// Interface for Carbon Calculation
export interface CarbonCalc {
    id: number;
    batchId: number;
    carbonAmount: number;
}

// Sample Data Arrays
export const sourceSites: SourceSite[] = [
    { id: 1, name: 'Site A', location: 'Location A' },
    { id: 2, name: 'Site B', location: 'Location B' }
];

export const batches: Batch[] = [
    { id: 1, status: BatchStatus.Pending, materials: [MaterialType.Organic], created_at: '2026-03-24T00:00:00Z' },
    { id: 2, status: BatchStatus.Completed, materials: [MaterialType.Recycled], created_at: '2026-03-23T12:00:00Z' }
];

export const processingLogs: ProcessingLog[] = [
    { id: 1, batchId: 1, timestamp: '2026-03-24T00:00:00Z', action: 'Batch created' },
    { id: 2, batchId: 1, timestamp: '2026-03-24T01:00:00Z', action: 'Processing started' }
];

export const validationRecords: ValidationRecord[] = [
    { id: 1, batchId: 1, isValid: true, comments: 'Valid batch' },
    { id: 2, batchId: 2, isValid: false, comments: 'Failed validation' }
];

export const carbonCalcs: CarbonCalc[] = [
    { id: 1, batchId: 1, carbonAmount: 10.5 },
    { id: 2, batchId: 2, carbonAmount: 5.2 }
];

// Function to get the status color
export const getStatusColor = (status: BatchStatus): string => {
    switch (status) {
        case BatchStatus.Pending:
            return 'yellow';
        case BatchStatus.InProgress:
            return 'blue';
        case BatchStatus.Completed:
            return 'green';
        case BatchStatus.Failed:
            return 'red';
        default:
            return 'grey';
    }
};